var assert = require('assert');

exports.create = function(db, obj, collection, callback){
    var coll = db.collection(collection);
    coll.insert(obj, function(err, res){
        assert.equal(err, null);
        console.log('inserted ' + res.result.n + ' objects into the collection' + collection);
        callback(res);
    });
};

exports.read = function(db, collection, callback){
    var coll = db.collection(collection);
    coll.find({}).toArray(function(err, res){
        assert.equal(err, null);
        callback(res);
    });
};

exports.deleteOne = function(db, obj, collection, callback){
    var coll = db.collection(collection);
    coll.deleteOne(obj, function(err, res){
        assert.equal(err, null);
        console.log('removed obj ' + obj);
        callback(res);
    });
};

exports.updateOne = function(db, obj, update, collection, callback){
    var coll = db.collection(collection);
    coll.updateOne(obj, {$set: update}, null, function(err, res){
        assert.equal(err, null);
        console.log('updated obj with ' + update);
        callback(res);
    });
};
