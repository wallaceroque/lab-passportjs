const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create User Schema
const User = new Schema({
    name: String,
    githubID: String,
    githubProfile: Schema.Types.Mixed,
});

module.exports = mongoose.model('users', User);