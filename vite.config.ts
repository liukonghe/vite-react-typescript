import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacyPlugin from '@vitejs/plugin-legacy';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    legacyPlugin({
      targets: ['chrome 49'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./**/*.{css,scss}"',
      },
    }),
  ],
});
