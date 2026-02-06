import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/index.ts'],
  clean: true,
  sourcemap: true,
  format: ['cjs'],
  target: 'node24',
  ...options,
}));
