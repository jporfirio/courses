const express = require('express');
const app = express();
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(morgan('dev'));

app.use(session({
  name: 'session-id',
  secret: process.env.NODE_SECRET_KEY || '12345-12345-12345-12345-12345',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

function auth(req, res, next){
    if(!req.session.user){
      let authHeader = req.headers.authorization;
      if(!authHeader){
        let err = new Error('You are not authenticated.');
        err.status = 401;
        next(err);
        return;
      }
      let auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
      let user = auth[0];
      let pass = auth[1];
      if(user == 'admin' && pass == 'password'){
        req.session.user = 'admin';
        next();
      } else {
        let err = new Error('You are not authorized.');
        err.status = 401;
        next(err);
      }
    } else if(req.session.user === 'admin'){
      console.log('req.session: ', req.session);
      next();
    } else {
      let err = new Error('You are not authenticated');
      next(err);
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
