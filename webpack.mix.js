const mix = require('laravel-mix');
require('laravel-mix-postcss-config');

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
    .copyDirectory('resources/img', 'public/img')
    .postCss('resources/css/app.css', 'public/css')
    .postCssConfig();
