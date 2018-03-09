/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const config = require('../configuration/configuration');

module.exports = function(src, destination, callback) {
    gulp.src(src)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destination))
        .on('end', function () {
            callback(config.MINIFY.SUCCESS);
        });
};