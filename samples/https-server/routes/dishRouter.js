const dishRouter = require('express').Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const model = require('../models/dishes-model');
const Verify = require('./verify');

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get(Verify.isUserOrAdmin, function(req, res, next){
    model.find({}, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.post(Verify.isAdmin, function(req, res, next){
    model.create(req.body, function(err, dish){
        if(err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the dish with id: ' + dish._id);
    });
})
.delete(Verify.isAdmin, function(req, res, next){
    model.remove({}, function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

dishRouter.route('/:dishId')
.get(Verify.isUserOrAdmin, function(req, res, next){
    model.findById(req.params.dishId, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.put(Verify.isAdmin, function(req, res, next){
    model.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, {
        new: true
    }, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.delete(Verify.isAdmin, function(req, res, next){
    model.findByIdAndRemove(req.params.dishId, function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

module.exports = dishRouter;
