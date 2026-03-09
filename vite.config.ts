import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  return {
    base: '/',

    define: {
      isProd,
      isDev,
    },

    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        verboseFileRoutes: false,
      }),
      react({
        babel: isProd
          ? {
              plugins: [['babel-plugin-react-compiler']],
            }
          : undefined,
      }),
      tailwindcss(),
    ],

    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: 'esbuild',
      sourcemap: false,

      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunks/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',

          manualChunks(id) {
            if (!id.includes('node_modules')) return;

            if (id.includes('/@tanstack/')) {
              return 'vendor-tanstack';
            }

            return 'vendor';
          },
        },
      },
    },

    server: {
      host: '0.0.0.0',
      allowedHosts: isDev ? true : undefined,
    },

    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});
