const promotionRouter = require('express').Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const model = require('../models/dishes-model');
const Verify = require('./verify');

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(Verify.isUserOrAdmin, function(req, res, next){
    res.end('Sending all promotiones');
})
.post(Verify.isAdmin, function(req, res, next){
    res.end('Saving new promotion: ' + req.body.name + ' with details: ' + req.body.details);
})
.delete(Verify.isAdmin, function(req, res, next){
    res.end('Deleting all promotiones');
});

promotionRouter.route('/:promotionId')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(Verify.isUserOrAdmin, function(req, res, next){
    res.end('Sending information for promotion with ID: ' + req.params.promotionId);
})
.put(Verify.isAdmin, function(req, res, next){
    res.end('Updating promotion with ID ' + req.params.promotionId + ', for name ' + req.body.name + ' and details ' + req.body.details);
})
.delete(Verify.isAdmin, function(req, res, next){
    res.end('Deleting promotion with ID ' + req.params.promotionId);
});

module.exports = promotionRouter;
