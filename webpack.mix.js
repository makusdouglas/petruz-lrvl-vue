const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css');
    // .less('node_modules/ant-design-vue/dist/antd.less', 'public/css', {
    //     lessOptions: {
    //         // If you are using less-loader@5 please spread the lessOptions to options directly
    //         strictMath: false,
    //         modifyVars: {
    //             'primary-color': '#1DA57A',
    //             'link-color': '#1DA57A',
    //             'border-radius-base': '2px',
    //         },
    //         javascriptEnabled: true,
    //     },
    // })
