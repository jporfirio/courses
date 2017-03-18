var express = require('express'),
    http = require('http'),
    morgan = require('morgan');

var hostname = 'localhost',
    port = 3000

var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// long version of the functionality directly bellow
// app.use(function(req, res, next){
//     console.log(req.headers);
//
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     res.end('Hello, world!');
// });
//
// var server = http.createServer(app);
//
// server.listen(port, hostname, function(){
//     console.log('Running server on ' + hostname + ' port: ' + port);
// })
app.listen(port, hostname, function(){
    console.log('Running server on ' + hostname + ' port: ' + port);
});
