var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    rating:  { type: Number, min: 1, max: 5, required: true },
    comment:  { type: String, required: true },
    author:  { type: String, required: true }
}, {
    timestamps: true
});

module.expores = mongoose.model('comments', commentSchema);
