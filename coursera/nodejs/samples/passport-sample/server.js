var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    user = require('./models/user-model');

var port = 3000, hostname = 'localhost';

// connects to course MLABs database saved on env variables
mongoose.connect(process.env.MLAB_DB_ADDRESS);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
    console.log('Connected to dabatase');
});

// creates an standard dish router with all access methods
var routerFactory = require('./routes/router-factory');
var dishRouter = routerFactory('../models/dish-model');
app.use('/dish', dishRouter);

app.listen(port, hostname, function(){
    console.log(`Server running on ${hostname}:${port}`);
});
