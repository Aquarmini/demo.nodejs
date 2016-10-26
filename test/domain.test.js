/**
 * Created by limx on 2016/10/26.
 */
var domain = require('domain');
var d = domain.create();
d.on('error', function (err) {
    console.log(err);
});

// 同步异常捕获
function sync_error() {
    var r = Math.random() * 10;
    console.log("random num is " + r);
    if (r > 5) {
        throw new Error("sync Error: random num" + r + " > 5");
    }
}

// 异步异常
function async_error() {
    setTimeout(function () {
        var r = Math.random() * 10;
        console.log("random num is " + r);
        if (r > 5) {
            throw new Error("async Error: random num" + r + " > 5");
        }
    }, 10);
}

function sync() {
    setInterval(function () {
        try {
            sync_error();
        } catch (err) {
            console.log(err);
        }
    }, 1000);
}


function async() {
    setInterval(function () {
        try {
            async_error();
        } catch (err) {
            console.log(err);
        }
    }, 1000);
}

function drun() {
    setInterval(function () {
        d.run(sync_error);
        d.run(async_error);
    }, 1000);
}

//sync();
//async();
drun();

