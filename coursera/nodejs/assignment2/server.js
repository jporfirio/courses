var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();

var dbtest = require('./db/dbtest').test;

var dish = require('./models/dishes-model'),
    leader = require('./models/leader-model'),
    promotion = require('./models/promotion-model');

var hostname = 'localhost',
    port = 3000

app.use(morgan('dev'));

var dishRouter = require('./routes/dishRouter'),
    promotionRouter = require('./routes/promotionRouter'),
    leaderRouter = require('./routes/leaderRouter');

app.use('/dish', dishRouter);
app.use('/promotion', promotionRouter);
app.use('/leader',leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log('Server running at ' + hostname + ' on port: ' + port);
    dbtest(dish.model, dish.sample, 'dishes');
    dbtest(leader.model, leader.sample, 'leaders');
    dbtest(promotion.model, promotion.sample, 'promotions');
});
