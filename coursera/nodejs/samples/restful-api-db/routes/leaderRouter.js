var leaderRouter = require('express').Router(),
    bodyParser = require('body-parser');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending all leaderes');
})
.post(function(req, res, next){
    res.end('Saving new leader: ' + req.body.name + ' with details: ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting all leaderes');
});

leaderRouter.route('/:leaderId')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending information for leader with ID: ' + req.params.leaderId);
})
.put(function(req, res, next){
    res.end('Updating leader with ID ' + req.params.leaderId + ', for name ' + req.body.name + ' and details ' + req.body.details);
})
.delete(function(req, res, next){
    res.end('Deleting leader with ID ' + req.params.leaderId);
});

module.exports = leaderRouter;
