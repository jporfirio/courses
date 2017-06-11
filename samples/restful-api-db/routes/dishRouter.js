var dishRouter = require('express').Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    model = require('../models/dishes-model.js');

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get(function(req, res, next){
    model.find({}, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.post(function(req, res, next){
    model.create(req.body, function(err, dish){
        if(err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the dish with id: ' + dish._id);
    });
})
.delete(function(req, res, next){
    model.remove({}, function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

dishRouter.route('/:dishId')
.get(function(req, res, next){
    model.findById(req.params.dishId, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.put(function(req, res, next){
    model.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, {
        new: true
    }, function(err, dish){
        if(err) throw err;
        res.json(dish);
    });
})
.delete(function(req, res, next){
    model.findByIdAndRemove(req.params.dishId, function(err, resp){
        if(err) throw err;
        res.json(resp);
    });
});

module.exports = dishRouter;
