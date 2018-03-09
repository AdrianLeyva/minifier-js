/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../configuration/configuration');

module.exports = function(src, destination, callback) {
    gulp.src(src)
        .pipe(imagemin(
            {
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
            }
        ))
        .pipe(gulp.dest(destination))
        .on('end', function () {
            callback(config.MINIFY.SUCCESS);
        });
};