import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite';
import components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      vueTemplate: true,
    }),
    components({
      dirs: ['./src/components/ui'],
      directoryAsNamespace: true,
      globalNamespaces: ['modals', 'tables'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
