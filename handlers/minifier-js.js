/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';

var MinifierJS = function(JSON) {
    this.JSON = JSON;
    this.configuration = require('../configuration/configuration');
};

MinifierJS.prototype.setJSON = function (JSON, callback) {
    this.JSON = JSON;
    callback();
};

MinifierJS.prototype.minifyCSS = function() {
    let context = this;
    let css = require('../components/css-minifier');
    css(this.JSON.css.src, this.JSON.css.destination, function() {
        if(context.configuration.MINIFY.SUCCESS)
            console.log('CSS minified successfully');
        else
            console.log('CSS not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyHTML = function() {
    let context = this;
    let html = require('../components/html-minifier');
    html(this.JSON.html.src, this.JSON.html.destination, function() {
        if(context.configuration.MINIFY.SUCCESS)
            console.log('HTML minified successfully');
        else
            console.log('HTML not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyIMG = function(){
    let context = this;
    let img = require('../components/img-minifier');
    img(this.JSON.img.src, this.JSON.img.destination, function() {
        if(context.configuration.MINIFY.SUCCESS)
            console.log('IMG minified successfully');
        else
            console.log('IMG not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyJS = function() {
    let context = this;
    let js = require('../components/js-minifier');
    js(this.JSON.js.src, this.JSON.js.destination, function() {
        if(context.configuration.MINIFY.SUCCESS)
            console.log('JS minified successfully');
        else
            console.log('JS not minified, something was wrong!');
    });
};

module.exports = MinifierJS;