/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//modules

var Core = () => {
    this.DataProcessor = require('./data-processor');
    this.MinifierJS = require('./minifier-js');
};

Core.prototype.init = () => {
    console.log('MinifierJS running');
    let mDataProcessor = new this.DataProcessor();
    let mMinifierJS;

    mDataProcessor.readFile((JSON) => {
        mMinifierJS = new this.MinifierJS(JSON);
        mMinifierJS.minifyCSS();
        mMinifierJS.minifyHTML();
        mMinifierJS.minifyIMG();
        mMinifierJS.minifyJS();
    })
};

Core.prototype.restart = () => {
    console.log('MinifierJS restarting')
};

Core.prototype.stop = () => {
    console.log('MinifierJS stoping')
};

module.exports = Core;