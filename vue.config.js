const { defineConfig } = require("@vue/cli-service");
// 引入elementui
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack 打包配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // 测试没有component情况下
      Components({
        resolvers: [ElementPlusResolver()]
      }),
    ],
  },
  devServer: {
    client: {
      // 客户端错误覆盖式提示：true打开，false关闭
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: false,
      },
      progress: true,
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL, // 你的后端服务器地址
        ws: false,
        changeOrigin: true,
      },
    },

  },

});
