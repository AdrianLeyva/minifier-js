/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//modules

var Core = function() {
    this.DataProcessor = require('./data-processor');
    this.MinifierJS = require('./minifier-js');
};

Core.prototype.init = function() {
    console.log('MinifierJS running');
    let mDataProcessor = new this.DataProcessor();
    var mMinifierJS = new this.MinifierJS(null);

    mDataProcessor.readFile(function(JSON) {
        if(JSON != null){
            mMinifierJS.setJSON(JSON, function () {
                mMinifierJS.minifyCSS();
                mMinifierJS.minifyHTML();
                mMinifierJS.minifyIMG();
                mMinifierJS.minifyJS();
            });
        }
    })
};

Core.prototype.restart = function() {
    console.log('MinifierJS restarting')
};

Core.prototype.stop = function() {
    console.log('MinifierJS stoping')
};

module.exports = Core;