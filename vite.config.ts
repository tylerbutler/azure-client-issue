import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   commonjsOptions: { include: [] },
  // },
  plugins: [
    vue(),
    {
      ...nodePolyfills(),
      enforce: 'pre',
      apply: 'build'
    },
  ],
})
