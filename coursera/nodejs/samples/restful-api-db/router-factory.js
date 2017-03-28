module.exports = function(modelPackageLocation, collections){

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
    });

    router.route('/:id')
    .get(function(req, res, next){
        model.findById(req.params.id, function(err, obj){
            if(err) throw err;
            res.json(obj);
        });
    })
    .put(function(req, res, next){
        model.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        }, function(err, obj){
            if(err) throw err;
            res.json(obj);
        })
    })
    .delete(function(req, res, next){
        model.findByIdAndRemove(req.params.id, function(err, resp){
            if(err) throw err;
            res.json(resp);
        });
    });

    if(collections){
        for(let c of collections){
            router.route('/:id/' + c)
            .get(function(req, res, next){
                model.findById(req.params.id, function(err, obj){
                    if(err) throw err;
                    res.json(obj[c]);
                });
            })
            .post(function(req, res, next){
                model.findById(req.params.id, function(err, obj){
                    if(err) throw err;
                    // TODO check if array exists
                    obj[c].push(req.body);
                    obj.save(function(err, obj){
                        if(err) throw err;
                        console.log('Updated object');
                        res.json(obj);
                    });
                });
            })
            .delete(function(req, res, next){
                model.findById(req.params.id, function(err, obj){
                    if(err) throw err;
                    for(let i = (obj[c].length-1); i >= 0; i--){
                        obj[c].id(obj[c][i]._id).remove();
                    }
                    obj.save(function(err, result){
                        if(err) throw err;
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        });
                        res.end('Deleted all instances of ' + c);
                    });
                });
            });

            router.route('/:id/' + c + '/:innerId')
            .get(function(req, res, next){
                model.findById(req.params.id, function(err, obj){
                    if(err) throw err;
                    res.json(obj[c].id(req.params.innerId));
                })
            })
            .put(function(req, res, next){
                model.findById(req.params.innerId, function(err, obj){
                    if(err) throw err;
                    // TODO not really updating, just removing and insertin new one
                    obj[c].id(req.params.innerId).remove();
                    // TODO check that array exists
                    obj[c].push(req.body);
                    obj.save(function(err, obj){
                        if(err) throw err;
                        console.log('Updated ' + c);
                        res.json(obj);
                    });
                });
            });
        }
    }

    return router;
}
