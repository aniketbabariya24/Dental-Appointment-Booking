const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = {UserModel}