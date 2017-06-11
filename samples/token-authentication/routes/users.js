const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const Verify = require('./verify');

router.get('/', Verify.isAdmin, (req, res, next) => {
  User.find({}, (err, user) => {
    if(err) throw err;
    res.json(user);
  });
});

router.post('/register', Verify.anyAdminRegistered, (req, res, next) => {
  User.register(new User({ username: req.body.username, admin: req.body.admin }),
  req.body.password, (err, user) => {
    if(err) {
      return res.status(500).json({ err: err });
    }
    passport.authenticate('local')(req, res, () => {
      return res.status(200).json({ status: 'Registration successful' });
    });
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return next(err);
    if(!user) return res.status(401).json({ err: info });
    req.logIn(user, (err) => {
      if(err) return res.status(500).json({ err: 'Could not log in user.' });
      console.log('User in users: ', user);
      let token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful',
        success: true,
        token: token
      });
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ status: 'Bye!' });
});

module.exports = router;
