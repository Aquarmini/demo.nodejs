/**
 * Created by limx on 2016/10/26.
 */
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
        addTest();
        callback(null, 1);
    },
    function (callback) {
        setTimeout(function () {
            getTest();
            //callback(null, 2);
        }, 1000);
    },
    function (callback) {
        addTest();
        getTest();
        callback(null, 3);
    }]
);

//addTest();
//setTimeout(function () {
//    getTest();
//}, 1000);
//addTest();