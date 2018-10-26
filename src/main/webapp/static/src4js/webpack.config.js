const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './components/entry.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, 'dist'), //输出位置
        filename: 'build.js' //输出文件
    },
    module: {
        //webpack使用loader的方式处理各种各样的资源
        rules: [
            {
                test: /\.js$/,           //用babel-loader处理
                exclude: /node_modules/, //处理除了nodde_modules里的js文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],   //在react环境下,也可以进行打包

                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         modules: true
                    //     }
                    // }
                ]
            }
        ]
    },
    //其他解决方案配置
    resolve: {

    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            template: 'components/index.html',//模板
            filename: 'index.html',
            inject: 'body',                   //放在哪个标签 (body)
            title: 'TEST'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
    devServer: {
        contentBase: "./dist", // 本地服务器在哪个目录搭建页面，一般我们在当前目录即可；

        historyApiFallback: true, // 当我们搭建spa应用时非常有用，它使用的是HTML5 History Api，任意的跳转或404响应可以指向 index.html 页面；

        inline: true,   // 用来支持dev-server自动刷新的配置，webpack有两种模式支持自动刷新，
        // 一种是iframe模式，一种是inline模式；使用iframe模式是不需要在devServer进行配置的，只需使用特定的URL格式访问即可；
        // 不过我们一般还是常用inline模式，在devServer中对inline设置为true后，当我们启动webpack-dev-server时仍要需要配置inline才能生效

        hot: true,       // 启动webpack热模块替换特性；

        port: 8081,

        open: true       //自动打开浏览器
    }

}