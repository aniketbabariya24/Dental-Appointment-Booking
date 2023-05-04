const mongoose= require('mongoose');

const serviceSchema= mongoose.Schema({
    name:String,
    image:String,
    mobile:Number,
    age:Number,
    gender:String,
    doctorID:String,
    serviceID:String,
    date:Date,
    time:String,
},{versionKey: false});

const ServiceModel= mongoose.model("user", serviceSchema)

module.exports={ServiceModel}