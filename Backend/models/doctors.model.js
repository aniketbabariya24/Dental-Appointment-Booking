const mongoose= require('mongoose');

const doctorSchema= mongoose.Schema({
    name:String,
    image:String,
    about:String,
    qualification:String,
    experience:Number,
    language:String,
    licenceNumber:Number,
    charge:Number,
    timings:String,
},{versionKey: false});

const DoctorModel= mongoose.model("doctor", doctorSchema)

module.exports={DoctorModel}