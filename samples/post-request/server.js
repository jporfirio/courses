var express = require('express');

var app = express();
var hPage = require('./route');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);
app.use('/', hPage);

app.listen(3000, 'localhost', function(){
  console.log('server is listening on port 3000.')
});
