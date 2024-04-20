import { defineConfig } from 'tsup';

// eslint-disable-next-line import/no-default-export
export default defineConfig((options) => ({
  dts: true,
  entryPoints: ['src/button.tsx'],
  external: ['react'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  ...options,
}));
