var mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
var currency = mongoose.Types.Currency;

var promotionSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    label: { type: String, required: true },
    price: { type: currency, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('promotion', promotionSchema);
