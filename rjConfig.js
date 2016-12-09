//  配置环境变量
require.config({
    baseUrl: 'dist/',
    packages: [{
                    name: 'lodash',
                    location: 'node_modules/lodash',
                    main: 'lodash'
                }, {
                    name: 'jquery',
                    location: 'node_modules/jquery/dist',
                    main: 'jquery'
            }, {
                    name: 'vue',
                    location: 'node_modules/vue/dist',
                    main: 'vue'
            }]
});
//  启动应用程序
require(['index'], function (App) {
    var app = new App.default({
        el : '#appRoot'
    })
});