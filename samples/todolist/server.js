// dependencies variables
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
// connection to mongobd
mongoose.connect('mongodb://localhost/todolist');
// static files location
app.use(express.static(__dirname + '/public'));
// log every request to console
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// overrides http methods
app.use(methodOverride());
// define data model
var Todo = mongoose.model('Todo', {
    text: String
});
// get all todos
app.get('/api/todos', function(req, res){
    // use mongoose to get all todos from database
    Todo.find(function(err, todos){
        // if there is an error, send the error
        if(err) { res.send(err); }
        // return all todos in json format
        res.json(todos);
    });
});
// create todos and return all todos
app.post('/api/todos', function(req, res){
    // information to create comes from ajax request from angular
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo){
        if(err) { res.send(err); }
        // get and return all todos after creation
        Todo.find(function(err, todos){
            if(err) { res.send(err); }
            res.json(todos);
        });
    });
});
// delete a todo
app.delete('/api/todos/:todo_id', function(req, res){
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, todo){
        if(err) { res.send(err); }
        Todo.find(function(err, todos){
            if(err) { res.send(err); }
            res.json(todos);
        });
    });
});
// frontend application managed by angular
app.get('*', function(req, res){
    // single view file, angular handles the rest
    res.sendfile('./public/index.html');
});
// listen to C9 port (ALWAYS AT THE END)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running...');
});
