import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'
function _resolve(dir) {
  return path.resolve(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': _resolve('src'),
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // Vant 官方根字体大小是 37.5
          propList: ['*'],
          selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
        })
      ]
    },
  }
})
