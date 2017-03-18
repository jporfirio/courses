var mongoose = require('mongoose');

var leaderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image:  { type: String, required: true },
    designation: { type: String, required: true },
    abbreviation: { type: String },
    description: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('leader', leaderSchema);
