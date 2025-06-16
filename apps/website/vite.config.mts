import react from '@vitejs/plugin-react';
import { type UserConfigFnObject, defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  console.log('VITE_API_BASE_URL', env.VITE_API_BASE_URL);

  return {
    plugins: [react(), tsconfigPaths()],
    env,
    define: {
      __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL),
      __DEV__: mode === 'development',
    },
    build: {
      target: 'ESNext',
      outDir: 'dist/app',
    },
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  };
}) satisfies UserConfigFnObject;
