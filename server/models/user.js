const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create User Schema
const User = new Schema({
    name: String,
    someID: String
});

module.exports = mongoose.model('users', User);