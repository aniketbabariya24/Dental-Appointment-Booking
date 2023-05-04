const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    DateandTime : String,
    Method : String,
    Url : String,
    Ip: String,
})

const logModel = mongoose.model('Logger',logSchema)

module.exports = { logModel }