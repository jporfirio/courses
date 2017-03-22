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

module.exports.model = mongoose.model('leader', leaderSchema);

module.exports.sample = {
    name: 'Martollo',
    image: 'n/a',
    designation: 'Technical Overmaster of Oven',
    abbreviation: 'TOO',
    description: 'Ruler of the Oven, commands of the armies of cheese'
}
