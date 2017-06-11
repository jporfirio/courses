var promotionRouter = require('express').Router(),
    bodyParser = require('body-parser');

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending all promotiones');
})
.post(function(req, res, next){
    res.end('Saving new promotion: ' + req.body.name + ' with details: ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting all promotiones');
});

promotionRouter.route('/:promotionId')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending information for promotion with ID: ' + req.params.promotionId);
})
.put(function(req, res, next){
    res.end('Updating promotion with ID ' + req.params.promotionId + ', for name ' + req.body.name + ' and details ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting promotion with ID ' + req.params.promotionId);
});

module.exports = promotionRouter;
