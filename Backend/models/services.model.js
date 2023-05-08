const mongoose= require('mongoose');

const serviceSchema= mongoose.Schema({
    name:    {type: String,required: true},
    image:   {type: String,required: true},
    details: {type: String,required: true},
},{versionKey: false});

const ServiceModel= mongoose.model("service", serviceSchema)


module.exports={ServiceModel}