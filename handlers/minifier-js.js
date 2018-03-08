/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
var MinifierJS = (JSON) => {
    this.JSON = JSON;
    this.configuration = require('../configuration/configuration');
};

MinifierJS.prototype.minifyCSS = () => {
    let css = require('../components/css-minifier');
    css(JSON.css.src, JSON.css.destination, () =>{
        if(this.configuration.MINIFY.SUCCESS)
            console.log('CSS minified successfully');
        else
            console.log('CSS not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyHTML = () => {
    let html = require('../components/html-minifier');
    html(JSON.html.src, JSON.html.destination, () =>{
        if(this.configuration.MINIFY.SUCCESS)
            console.log('HTML minified successfully');
        else
            console.log('HTML not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyIMG = () => {
    let img = require('../components/img-minifier');
    img(JSON.img.src, JSON.img.destination, () =>{
        if(this.configuration.MINIFY.SUCCESS)
            console.log('IMG minified successfully');
        else
            console.log('IMG not minified, something was wrong!');
    });
};

MinifierJS.prototype.minifyJS = () => {
    let js = require('../components/js-minifier');
    js(JSON.js.src, JSON.js.destination, () =>{
        if(this.configuration.MINIFY.SUCCESS)
            console.log('JS minified successfully');
        else
            console.log('JS not minified, something was wrong!');
    });
};

module.exports = MinifierJS;