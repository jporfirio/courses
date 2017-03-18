var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express()

var hostname = 'localhost',
    port = 3000

app.use(morgan('dev'));
// app.use(bodyParser.json());
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
// app.all('/dishes', function(req, res, next){
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     next();
// });
.get(function(req, res, next){
    res.end('Sending all dishes');
})
// app.get('/dishes', function(req, res, next){
//     res.end('Sending all dishes');
// });
.post(function(req, res, next){
    res.end('Saving new dish: ' + req.body.name + ' with details: ' + req.body.details);
})
// app.post('/dishes', function(req, res, next){
//     res.end('Saving new dish: ' + req.body.name + ' with details: ' + req.body.details);
// });
.delete(function(req, res, next){
    res.end('Deleting all dishes');
});
// app.delete('/dishes', function(req, res, next){
//     res.end('Deleting all dishes');
// })

dishRouter.route('/:dishid')
.all(function(req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    next();
})
.get(function(req, res, next){
    res.end('Sending information for dish with id: ' + req.params.dishid);
})
// app.get('/dishes/:dishid', function(req, res, next){
//     res.end('Sending information for dish with id: ' + req.params.dishid);
// });
.put(function(req, res, next){
    res.end('Updating dish with id ' + req.params.dishid + ', for name ' + req.body.name + ' and details ' + req.body.details);
})
// app.put('/dishes/:dishid', function(req, res, next){
//     res.end('Updating dish with id ' + req.params.dishid + ', for name ' + req.body.name + ' and details ' + req.body.details);
// });
.delete(function(req, res, next){
    res.end('Deleting dish with id ' + req.params.dishid);
});
// app.delete('/dishes/:dishid', function(req, res, next){
//     res.end('Deleting dish with id ' + req.params.dishid);
// });

app.use('/dishes', dishRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log('Server running at ' + hostname + ' on port ' + port);
});
