/**
 * Created by limx on 2016/10/26.
 */
var config = require('../config.js');
var async = require('async');
var test = 0;

function addTest() {
    test++;
}

function getTest() {
    console.log(test);
}

async.series([
    function (callback) {
        callback(null, addTest());
    },
    function (callback) {
        setTimeout(function () {
            callback(null, getTest());
        }, 1000);
    },
    function (callback) {
        callback(null, addTest());
    }]
);

//addTest();
//setTimeout(function () {
//    getTest();
//}, 1000);
//addTest();