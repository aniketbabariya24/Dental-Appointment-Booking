const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    name :   {type: String,required: true},
    email:   {type: String,required: true},
    phone:   {type: Number,required: true},
    message: {type: String,required: true},
})

const feedbackModel = mongoose.model('FeedbackService', feedbackSchema)

module.exports = { feedbackModel };