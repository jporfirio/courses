var express = require('express'),
    morgan = require('morgan'),
    app = express();

function auth(req, res, next){
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    if(!authHeader){
        var err = new Error('You are not authenticated (I almost said prepared!)');
        err.status = 401;
        next(err);
        return;
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0], pass = auth[1];
    if(user == 'admin' && pass == 'root'){
        next();
    } else {
        var err = new Error('You are not authenticated');
        err.status = 401;
        next(err);
    }
}

app.use(morgan('dev'));
app.use(auth);
app.use(express.static(__dirname + '/public'));
app.use(function(err, req, res, next){
    res.writeHead(err.status || 500, {
        'WWW-Authenticate': 'Basic',
        'Content-type': 'text/plain'
    });
    res.end(err.message);
});

var port = 3000, hostname = 'localhost';
app.listen(port, hostname, function(){
    console.log('Server running at ' + hostname + ':' + port);
});
