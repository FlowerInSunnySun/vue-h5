const path = require('path')
// const vuxLoader = require('@vux/loader')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        resolve('src/styles/common/var.less')
      ],
      preProcessor: 'less'
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // data: `@import "src/styles/common/var.less";`
      },
      sass: {
        // data: `@import "src/styles/common/var.less";`
      }
    }
  },
  configureWebpack: config => {
    // 更改入口文件的路径
    // config.entry.app = resolve('src/main.js')
    // 添加插件
    // vuxLoader.merge(config, {
    //   options: {},
    //   plugins: ['vux-ui']
    // })
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
  },
  // 打包时不生成.map文件，减少体积，加快速度
  productionSourceMap: false,
  runtimeCompiler: true,
  // transpileDependencies: ['vux'], // 开启后会导致vux/axios文件报错
  devServer: {
    useLocalIp: true,
    port: 5000,
    hotOnly: true
  }
}
