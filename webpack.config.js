let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    yaml = require('js-yaml'),
    fs = require('fs'),
    configs;
try {
    configs = yaml.safeLoad(fs.readFileSync('configs.yml'), 'utf-8')
} catch(e) {
    console.log('解析配置文件出错，请仔细检查configs.yml')
}

module.exports = {

    //  主入口文件，可多个
    entry: configs.entry,

    //  输出的结果
    output: {
        filename : '[name].js',
        //  输出的路径
        path : configs.project.dest,
        publicPath: configs.project.public,
        //  umd包含了对amd、commonjs、var等多种规范的支持
        libraryTarget : 'amd'
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
            title  : 'Vue Admin',
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
                include: configs.project.src,
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