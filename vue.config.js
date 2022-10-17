const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: 'dist', // 打包的目录
  // 在保存时校验格式
  lintOnSave: true,
  // 生产环境是否生成 SourceMap
  productionSourceMap: false,
  
  publicPath: '/',

  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '127.0.0.1',
    port: 8089, // 服务端口
    https: false,
    proxy: { // 设置代理
      '/api': {
        ws:false,
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '/api': '/',
        }
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
