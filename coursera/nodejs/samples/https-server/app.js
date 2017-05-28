// external modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
// internal modules
const config = require('./config');
const app = express();
// generate keys with
// openssl genrsa 1024 > private.key
// openssl req -new -key private.key -out cert.csr
// openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
const options = {
  key: fs.readFileSync(__dirname + '/private.key'),
  cert: fs.readFileSync(__dirname + '/certificate.pem')
}
// server configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// redirects all trafic throught secure server
app.all('*', (req, res, next) => {
  console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
  if(req.secure){
    return next();
  }
  res.redirect('https://' + req.hostname + ':' + app.get('secPort') + req.url);
});
// passport configuration
const User = require('./models/user');
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// sets up the routes
app.use('/dishes', require('./routes/dishRouter'));
app.use('/leaders', require('./routes/leaderRouter'));
app.use('/promotions', require('./routes/promotionRouter'));
app.use('/users', require('./routes/users'));
// handles database connection
mongoose.connect(config.MONGO_URL);
mongoose.connection.on('error', console.error.bind(console, 'Connection error!'));
mongoose.connection.once('open', () => {
  console.log('Connected to database!');
});
// stops errors leaking to user outside of dev environment
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})
// application listening configuration
const port = 3000;
const secPort = port + 443;
const hostname = 'localhost';
http.createServer(app).listen(port);
https.createServer(options, app).listen(secPort);
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}\n`);
// });
