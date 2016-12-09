let path = require('path')
let es6 = path.resolve(__dirname, './es6')

module.exports = {

    //  主入口文件，可多个
    entry: {
        index : './es6/index.es6',
        libs  : './es6/libs.es6'
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
        'jquery' : 'jquery'
    },

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
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.es6']
    }

}