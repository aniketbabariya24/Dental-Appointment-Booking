const mongoose= require('mongoose');

const serviceSchema= mongoose.Schema({
    name:String,
    image:String,
    details:String,
},{versionKey: false});

const ServiceModel= mongoose.model("service", serviceSchema)


module.exports={ServiceModel}