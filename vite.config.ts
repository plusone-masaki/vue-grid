import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [
    vue(),
    tsConfigPaths({
      extensions: ['.ts', '.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@@': path.resolve(__dirname),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
