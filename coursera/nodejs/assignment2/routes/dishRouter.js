var dishRouter = require('express').Router(),
    bodyParser = require('body-parser');

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending all dishes');
})
.post(function(req, res, next){
    res.end('Saving new dish: ' + req.body.name + ' with details: ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending information for dish with ID: ' + req.params.dishId);
})
.put(function(req, res, next){
    res.end('Updating dish with ID ' + req.params.dishId + ', for name ' + req.body.name + ' and details ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting dish with ID ' + req.params.dishId);
});

module.exports = dishRouter;
