import * as fs from 'fs';
import * as path from 'path';

import {createFilter} from '@rollup/pluginutils';
import {babel} from '@rollup/plugin-babel';
import virtual from '@rollup/plugin-virtual';
import globby from 'globby';
import svgr from '@svgr/core';

const convert = svgr.default;
const iconBasePath = new URL('./icons', import.meta.url).pathname;
const iconPaths = globby.sync(path.join(iconBasePath, '*.svg'));

const iconExports = [];
const iconTypes = [];
const iconMetadata = {};

const kebabToPascalCase = (name) => {
  const words = name.split('-');
  const pascalCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return pascalCaseWords.join('');
};

iconPaths.forEach((filename) => {
  const replaceName = filename
    .replace(`${iconBasePath}/`, '')
    .replace('.svg', '');

  const exportName = kebabToPascalCase(replaceName);

  iconMetadata[exportName] = {
    id: exportName
  };

  iconExports.push(
    `export {default as ${exportName}} from '../icons/${replaceName}.svg';`,
  );
  iconTypes.push(
    `export declare const ${exportName}: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;`,
  );
});

const entrypointContent = iconExports.join('\n');
const entrypointTypes = iconTypes.join('\n');

const metadataContent = `
const metadata = ${JSON.stringify(iconMetadata, null, 2)};
export default metadata;
`.trim();
const metadataTypes = `export interface Icon {
  id: string;
  name: string;
  description: string;
  keywords: string[];
}

declare const metadata: {
  [iconId: string]: Icon;
};

export default metadata;
`.trim();

const interop = (id) => (id === 'react' ? 'defaultOnly' : 'auto');

function customTypes({fileName, source}) {
  return {
    name: 'custom-types',
    buildEnd() {
      if (source.length === 0) {
        this.warn('source content is empty');
      }

      this.emitFile({type: 'asset', fileName, source});
    },
  };
}

/**
 * A rollup plugin that acts upon SVG files. It will:
 *
 * - Run our SVGO optimization config over the SVG contents
 * - Write the SVG to the specified `outputFolder`, for people that wish to use
 *   the raw icons
 * - Pass the optimized SVG into SVGR and return the result so that rollup can
 *   inline the result into JavaScript output, for people who wish to import
 *   React components from the index file
 */
function svgBuild(options = {}) {
  const filter = createFilter(options.include || '**/*.svg', options.exclude);

  const svgs = [];

  return {
    name: 'svgBuild',
    async transform(source, id) {
      if (!filter(id) || id.slice(-4) !== '.svg') {
        return null;
      }

      const svg = fs.readFileSync(id, 'utf8');

      svgs.push({id, svg});

      const svgrState = {filePath: id, caller: {name: 'svgBuild'}};
      const jsCode = await convert(svg, {}, svgrState);

      return {
        code: jsCode,
        ast: {
          type: 'Program',
          sourceType: 'module',
          start: 0,
          end: null,
          body: [],
        },
        map: {mappings: ''},
      };
    },
    buildEnd() {
      svgs.forEach(({id, svg}) => {
        this.emitFile({
          type: 'asset',
          fileName: `svg/${path.basename(id)}`,
          source: svg,
        });
      });
    },
  };
}

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        interop,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        manualChunks: (id) => {
          if (id.startsWith(iconBasePath)) {
            return id.replace(iconBasePath, 'icons/');
          }
        },
      },
      {
        dir: 'dist',
        format: 'esm',
        interop,
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name].mjs',
        manualChunks: (id) => {
          if (id.startsWith(iconBasePath)) {
            return id.replace(iconBasePath, 'icons/');
          }
        },
      },
    ],

    external: ['react'],
    onwarn: (warning, warn) => {
      // Unresolved imports means Rollup couldn't find an import, possibly because
      // we made a typo in the file name. Fail the build in that case so we know
      // when the library is no longer self-contained or we have bad imports
      if (warning.code === 'UNRESOLVED_IMPORT') {
        throw new Error(warning.message);
      }

      // Use default for everything else
      warn(warning);
    },
    plugins: [
      virtual({
        'src/index.ts': entrypointContent,
      }),
      svgBuild({include: `${iconBasePath}/*.svg`}),
      babel({
        rootMode: 'root',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        envName: 'production',
        babelHelpers: 'bundled',
      }),
      customTypes({fileName: `index.d.ts`, source: entrypointTypes}),
    ],
  },
  {
    input: 'src/metadata.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].js',
        exports: 'default',
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [
      virtual({
        'src/metadata.ts': metadataContent,
      }),
      customTypes({fileName: `metadata.d.ts`, source: metadataTypes}),
    ],
  },
];
