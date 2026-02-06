import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/index.mjs'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  target: 'node24',
  ...options,
}));
