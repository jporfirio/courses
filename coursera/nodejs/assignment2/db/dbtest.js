var mongoose = require('mongoose'),
    assert = require('assert');

// insert db url here if you're not using environment variable
var url = '';

module.exports = {
    test: function(model, sample, collection){
        mongoose.connect(process.env.MLAB_DB_ADDRESS || url, function(err){});
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error!'));
        db.once('open', function(){
            console.log('Connected to server for collection ' + collection + '!');
            model.create(sample, function(err, object){
                if(err) throw err;
                console.log('Sample created for collection ' + collection);
                db.collection(collection).drop(function(){
                    console.log('Collection \'' + collection + '\' dropped.');
                    db.close();
                })
            })
        })
    }
}
