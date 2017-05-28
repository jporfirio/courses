// external modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const path = require('path');
// internal modules
const config = require('./config');
const app = express();
// server configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})

// application listening configuration
const port = 3000;
const hostname = 'localhost';
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}\n`);
});
