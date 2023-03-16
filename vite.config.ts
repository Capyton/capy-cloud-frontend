import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

export default defineConfig(() => ({
  resolve: {
    alias: {
      app: path.resolve('src/app'),
      components: path.resolve('src/components'),
      types: path.resolve('src/types'),
      utils: path.resolve('src/utils'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
}));
