const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    DateandTime : String,
    Method      : String,
    URL         : String,
    IP          : String,
})

const logModel = mongoose.model('Logger',logSchema)

module.exports = { logModel }