const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getToken = (user) => {
  return jwt.sign(user, config.SECRET_KEY, {
    expiresIn: 3600
  });
};

exports.isUserOrAdmin = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
      if(err){
        let err = new Error('You are not authenticated.');
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    let err = new Error('No token provided.');
    err.status = 403;
    return next(err);
  }
};

exports.isAdmin = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
      if(err){
        let err = new Error('You are not authenticated.');
        err.status = 401;
        return next(err);
      } else if(!decoded._admin){
        let err = new Error('You are not authorized to use this resource');
        err.status = 401;
        return next(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    let err = new Error('No Token Provided.');
    err.status = 403;
    return next(err);
  }
};

/**
 * User to be registered will be flagged as admin if no admin exists
 */
exports.anyAdminRegistered = (req, res, next) => {
  User.count({ admin: true }, (err, number) => {
    if(err) return next(err);
    req.body.admin = number ? false : true;
    next();
  });
};
