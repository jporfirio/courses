var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dboper = require('./dbops');

// Connection URL
var url = process.env.MLAB_DB_ADDRESS;

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    dboper.create(db, { name: "Vadonut", description: "Test" },
    "dishes", function (result) {
        console.log(result.ops);

        dboper.read(db, "dishes", function (docs) {
            console.log(docs);

            dboper.updateOne(db, { name: "Vadonut" },
            { description: "Updated Test" },
            "dishes", function (result) {
                console.log(result.result);

                dboper.read(db, "dishes", function (docs) {
                    console.log(docs)

                    db.dropCollection("dishes", function (result) {
                        console.log(result);

                        db.close();
                    });
                });
            });
        });
    });
});
