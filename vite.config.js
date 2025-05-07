import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '', // Empty string for relative paths with gh-pages
    root: '.',
    publicDir: 'public',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 5173,
        open: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        // Ensure relative paths for assets
        assetsDir: 'assets',
        minify: 'terser', // Use terser for better minification
        terserOptions: {
            compress: {
                drop_console: false, // Keep console for debugging
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                // Use stable filenames without content hashes
                assetFileNames: 'assets/[name][extname]',
                chunkFileNames: 'assets/[name].js',
                entryFileNames: 'assets/index.js',
                manualChunks: undefined, // Don't split into chunks for small site
            }
        }
    },
});
