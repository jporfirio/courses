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

module.exports.model = mongoose.model('dish', dishSchema);

module.exports.sample = {
    name: 'pizza di martollo',
    image: 'n/a',
    category: 'pizza',
    label: 'PdM',
    price: 12.50,
    description: 'Martollo\'s Pizza, made with love and some special ingrediant not approved by the authorities',
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
