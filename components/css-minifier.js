/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const config = require('../configuration/configuration');

module.exports = function(src, destination, callback) {
    gulp.src(src)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destination))
        .on('end', function () {
            callback(config.MINIFY.SUCCESS);
        });
};