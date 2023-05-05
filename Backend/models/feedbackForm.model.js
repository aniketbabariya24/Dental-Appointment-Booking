const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    name : String,
    email: String,
    phone: Number,
    message:String,
})

const feedbackModel = mongoose.model('FeedbackService', feedbackSchema)

module.exports = { feedbackModel };