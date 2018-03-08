/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const config = require('../configuration/configuration');

module.exports = (src, destination, callback) => {
    gulp.src(src).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
        .pipe(gulp.dest(destination))
        .on('end', callback(config.MINIFY.SUCCESS))
        .on('error', callback(config.MINIFY.ERROR));
};