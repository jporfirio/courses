module.exports = function(modelPackageLocation, nameForIdField){

    var router = require('express').Router(),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        model = require(modelPackageLocation);

    router.use(bodyParser.json());

    router.route('/')
    .get(function(req, res, next){
        model.find({}, function(err, obj){
            if(err) throw err;
            res.json(obj);
        });
    })
    .post(function(req, res, next){
        model.create(req.body, function(err, obj){
            if(err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Persisted new Object with id: ' + obj._id);
        });
    })
    .delete(function(req, res, next){
        model.remove({}, function(err, resp){
            if(err) throw err;
            res.json(resp);
        });
    });

    router.route('/:' + nameForIdField)
    .get(function(req, res, next){
        model.findById(req.params[nameForIdField], function(err, obj){
            if(err) throw err;
            res.json(obj);
        });
    })
    .put(function(req, res, next){
        model.findByIdAndUpdate(req.params[nameForIdField], {
            $set: req.body
        }, {
            new: true
        }, function(err, obj){
            if(err) throw err;
            res.json(obj);
        })
    })
    .delete(function(req, res, next){
        model.findByIdAndRemove(req.params[nameForIdField], function(err, resp){
            if(err) throw err;
            res.json(resp);
        });
    });

    return router;
}
