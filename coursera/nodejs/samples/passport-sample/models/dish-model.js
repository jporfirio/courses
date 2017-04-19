var mongoose = require('mongoose');

var dishSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: String, required: false}
})

module.exports = mongoose.model('dishes', dishSchema);
