var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    app = express();

var hostname = 'localhost',
    port = 3000

app.use(morgan('dev'));

var dishRouter = require('./routes/dishRouter'),
    promotionRouter = require('./routes/promotionRouter'),
    leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promotionRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log('Server running at ' + hostname + ' on port ' + port);
});
