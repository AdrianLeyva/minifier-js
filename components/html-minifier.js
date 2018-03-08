/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const config = require('../configuration/configuration');

module.exports = (src, destination, callback) => {
    gulp.src(src)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(destination))
        .on('end', callback(config.MINIFY.SUCCESS))
        .on('error', callback(config.MINIFY.ERROR));
};