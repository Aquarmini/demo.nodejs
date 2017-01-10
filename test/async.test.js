/**
 * Created by limx on 2016/10/26.
 */
var async = require('async');

async.series([
    function (callback) {
        setTimeout(function () {
            console.log(1);
            callback(null, 1);
        }, 1000);
    },
    function (callback) {
        setTimeout(function () {
            console.log(2);
            callback(null, 1);
        }, 500);
    },
    function (callback) {
        setTimeout(function () {
            console.log(3);
            callback(null, 1);
        }, 100);
    },
    function (callback) {
        setTimeout(function () {
            console.log(1);
        }, 1000);
        setTimeout(function () {
            console.log(2);
        }, 500);
        setTimeout(function () {
            console.log(3);
        }, 100);
    },
    function (err, res) {
        if (err) {
            console.log(res);
        }
    }]
)
;