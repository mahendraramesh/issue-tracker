const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema({
    number: Number,
    title: String,
    description: String,
    createdOn: { type: Date, default: Date.now },
    owner: String,
    priority: { type: String, default: 'Minor' },
    status: { type: String, default: 'Open' }
});

module.exports = mongoose.model('Issue', Issue, 'issues');