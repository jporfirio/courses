var mongoose = require('mongoose'),
    assert = require('assert');

var dishes = require('./models/dishes-model');
var sampleDish = {
    name: 'pizza di martollo',
    image: 'n/a',
    category: 'pizza',
    label: 'PdM',
    price: 12.50,
    descrption: 'Martollo\'s Pizza, made with love and some special ingrediant not approved by the authorities',
    comments: [
        {
            rating: 5,
            comment: 'Never tasted something as good as this, and the aftertaste is orgasmic',
            author: 'Sidney Myers'
        },
        {
            rating: 1,
            comment: 'BLAM THIS PIECE OF CRAP!',
            author: 'Boaty McBoatface'
        }
    ]
};
var sampleComment = {
    rating: 3,
    comment: 'The taste was ok, but the waiters were giggling at me like I\'m eating something funny',
    author: 'Mr Hammer'
};

module.exports = function(){
    mongoose.connect(process.env.MLAB_DB_ADDRESS);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error!'));
    db.once('open', function(){
        console.log('Connected to server!');
        dishes.create(sampleDish, function(err, dish){
            if(err) throw err;
            console.log('Dish created', dish);
            var id = dish._id;
            setTimeout(function(){
                dishes.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated description'
                    }
                }, {
                    new: true
                })
                .exec(function(err, dish){
                    if(err) throw err;
                    console.log('Updated dish', dish);
                    dish.comments.push(sampleComment);
                    dish.save(function(err, dish){
                        console.log('Pushed new comment', dish);
                        db.collection('dishes').drop(function(){
                            db.close();
                        });
                    });
                });
            }, 3000);
        });
    });
}
