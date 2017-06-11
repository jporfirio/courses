var rect = require('./rectangle');

var argv = require('yargs')
    .usage('Usage: node $0 -l [num] -b [num]')
    .demand(['l','b'])
    .argv;

function solveRect(l,b) {
    console.log("Solving for rectangle with length: " + l + " and width: " + b + ".");
    rect(l, b, function(err, rectangle){
        if(err) {
            console.log(err);
        }
        else {
            console.log("The Area of the rectangle is " + rectangle.area());
            console.log("The Perimeter of the rectangle is " + rectangle.perimeter());
        }
    });
}

solveRect(argv.l, argv.b);
