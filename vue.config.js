module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'resume2',
    filenameHashing: false,
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    configureWebpack: config => {},
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        https: true,
        hotOnly: false,
        proxy: null,
        before: app => {
        }
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/css/global.scss";`
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
        $: 'jquery',
        jQuery: 'jquery'
    },
    transpileDependencies: [

    ]
};
