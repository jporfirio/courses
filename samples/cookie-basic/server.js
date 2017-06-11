var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser');

app.use(morgan('dev'));
app.use(cookieParser(process.env.NODE_SECRET_KEY || '12345-12345-12345-12345-12345'));

function auth(req, res, next){
    if(!req.signedCookies.user){
        var authHeader = req.headers.authorization;
        if(!authHeader){
            var err = new Error('You are not authenticated');
            err.status = 401;
            next(err);
            return;
        }
        var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0], pass = auth[1];
        if(user == 'admin' && pass == 'root'){
            res.cookie('user', 'admin', {signed: true});
            next();
        } else {
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    } else {
        if(req.signedCookies.user === 'admin'){
            next();
        } else {
            var err = new Error('You are not authenticated!!!');
            err.status = 401;
            next(err);
        }
    }
};

app.use(auth);
app.use(express.static(__dirname + '/public'));
app.use(function(err, req, res, next){
    res.writeHead(err.status || 500, {
        'WWW-Authenticate': 'Basic',
        'Content-Type': 'text/plain'
    });
    res.end(err.message);
});

var port = 3000, hostname = 'localhost';
app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
