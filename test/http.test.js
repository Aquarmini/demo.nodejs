/**
 * Created by limx on 2016/10/26.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end();
}).listen(10086, function () {
    console.log('开启服务端口 10086');
});
