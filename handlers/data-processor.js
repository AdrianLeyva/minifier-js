/**
 * Created by adrianaldairleyvasanchez on 3/8/18.
 */
'use strict';
//Modules
const fs = require('fs');

var DataProcessor = function() {

};

DataProcessor.prototype.readFile = function(callback) {
    const PATH = './path.json';

    fs.readFile(PATH, 'utf8', function (err, data) {
        if (err){
            console.log(err);
            callback(null);
        }
        else
            callback(JSON.parse(data));
    });
};

module.exports = DataProcessor;