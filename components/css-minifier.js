/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const config = require('../configuration/configuration');

module.exports = (src, destination, callback) => {
    gulp.src(src)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destination));

    callback(config.MINIFY.SUCCESS);
};