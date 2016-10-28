/**
 * Created by limx on 2016/10/28.
 */
var crypto = require("crypto");
var md5 = crypto.createHash("md5");
var ret = md5.update("hello world!").digest("hex");
console.log(ret);
var md5 = crypto.createHash("md5");
var ret = md5.update("hello world! 李铭昕").digest("hex");
console.log(ret);
var md5 = crypto.createHash("md5");
var ret = md5.update(new Buffer("hello world! 李铭昕")).digest("hex");
console.log(ret);