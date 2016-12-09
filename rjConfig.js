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
            }]
});
//  启动应用程序
require(['index', 'libs'], function (init, libs) {
    init.default();
});