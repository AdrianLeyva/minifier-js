/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const gulp = require('gulp');
const pump = require('pump');
const uglify = require('gulp-uglify');
const config = require('../configuration/configuration');

module.exports = (src, destination, callback) => {
    pump([
            gulp.src(src),
            uglify(),
            gulp.dest(destination)
        ],
        callback(config.MINIFY.SUCCESS)
    );
};