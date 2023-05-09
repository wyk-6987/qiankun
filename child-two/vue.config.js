const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        port: "6002",
        headers: {
            "Access-Control-Allow-Origin": "*", //所有人都可以访问我的服务器
        },
    },
    configureWebpack: {
        output: {
            // library: `${name}-[name]`,
            library: `vueChildTwo`,
            libraryTarget: "umd", // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`,
        },
    },
})
