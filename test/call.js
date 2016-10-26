/**
 * Created by limx on 2016/10/25.
 * 回调测试
 */
var redis = require('redis');
var config = require('../config.js')
var redisClient = redis.createClient(config['REDISPORT'], config['REDISHOST']);
redisClient.auth(config['REDISPASS']);

redisClient.set('test', 1);
redisClient.get('test', function (err, res) {
    if (err)return;
    if (res == null)return;
    console.log(res);
});

test(function () {
    redisClient.keys('test*', function (err, res) {
        if (err)return;
        if (res == null)return;
        console.log(res);
    });
});

function test(callback) {
    for (var i = 0; i < 10; i++) {
        redisClient.set('test' + i, 1);
    }
    callback();
}