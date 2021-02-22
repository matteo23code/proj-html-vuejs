let mix = require('laravel-mix');

mix
 .sass('src/style-sass.scss', 'dist/')
 .options({processCssUrls: false});