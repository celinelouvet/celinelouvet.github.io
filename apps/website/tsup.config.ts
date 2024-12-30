import { type Options, defineConfig } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['server/index.ts'],
  // clean: true,
  sourcemap: true,
  format: ['cjs'],
  target: 'node22',
  ...options,
}));
