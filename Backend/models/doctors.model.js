const mongoose= require('mongoose');

const doctorSchema= mongoose.Schema({
    name:String,
    image:String,
    about:String,
    qualification:Array,
    experience:Number,
    language:Array,
    licenceNumber:Number,
    charges:Number,
    timing:Array,
},{versionKey: false});

const DoctorModel= mongoose.model("user", doctorSchema)

module.exports={DoctorModel}