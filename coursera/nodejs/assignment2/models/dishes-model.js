var mongoose = require('mongoose'),
    commentSchema = require('./comment-model');

// mongoose-currency
require('mongoose-currency').loadType(mongoose);
var currency = mongoose.Types.Currency;

var dishSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    category: { type: String, required: true },
    label: { type: String, required: true, unique: true, default: '' },
    price: { type: currency, required: true },
    description: { type: String, required: true },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('dish', dishSchema);
