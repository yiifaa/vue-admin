let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
let es6 = path.resolve(__dirname, './es6')

module.exports = {

    //  主入口文件，可多个
    entry: {
        index : './es6/index.es6'
    },

    //  输出的结果
    output: {
        filename : '[name].js',
        //  输出的路径
        path : './dist',
        libraryTarget : 'umd'
    },
    
    /*
     * 需要从外部引入的库文件
     */
    externals: {
        'lodash' : 'lodash',
        'jquery' : 'jquery',
        'vue'    : 'vue'
    },
    
    plugins : [
        //  注入样式与代码
        new HtmlWebpackPlugin({
            title  : 'STI Webpack Template',
            inject : 'body',
            filename : 'index.html'
        })
    ],

    /*
     *  引入的模块与插件
     */
    module: {
        loaders: [
            /* ES6编译 */
            {
                test: /\.es6$/,
                loader: 'babel-loader',
                include: es6,
                exclude: /(node_modules|bower_components|dist)/
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass"
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(html|tpl)$/,
                loader: "html"
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.es6', '.vue'],
        //  不要使用相对路径
        alias : {
            i18n : './i18n',
            apps : './apps',
            components : './components'
        }
    }

}