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

module.exports.sample = {
    name: 'Sales Extraordinaire',
    image: 'n/a',
    label: 'Things you can\' live without',
    price: 99.89,
    description: 'Some things are worth dying for. Are you? Wait, WHAT? What kind of question is that?'
}
