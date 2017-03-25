var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_DB_ADDRESS);

var routerFactory = require('./router-factory');
var dishRouter = routerFactory('./models/dishes-model', 'dishId');
app.use('/dish', dishRouter);
var leaderRouter = routerFactory('./models/leader-model', 'leaderId');
app.use('/leader', leaderRouter);
var promotionRouter = routerFactory('./models/promotion-model', 'promotionId');
app.use('/promotion', promotionRouter);

mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
    console.log('Connected to database!');
});

app.use(express.static(__dirname + '/public'));

var port = 3000, hostname = 'localhost';
app.listen(port, hostname, function(){
    console.log('Server running at ' + hostname + ' on port: ' + port);
});
