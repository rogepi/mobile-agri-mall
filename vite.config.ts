import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@ASS',
        replacement: resolve(__dirname, 'src/assets'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "@ASS/css/theme.less";`,
        },
      },
    },
  },
})
