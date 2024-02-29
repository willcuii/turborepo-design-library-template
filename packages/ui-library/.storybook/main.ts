import type {StorybookConfig} from '@storybook/react-vite';

import {join, dirname} from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: [
    '../src/**/*.mdx',
    '../src/**/stories/index.stories.@(js|jsx|mjs|mdx|ts|tsx)',
    '../src/tokens/**/stories/*.stories.@(js|jsx|mjs|mdx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-themes',
    'storybook-dark-mode',
    'storybook-addon-react-docgen',
  ],
  async viteFinal(config, options) {
    config.assetsInclude = ['**/*.md', '/sb-preview/runtime.js'];
    return config;
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
