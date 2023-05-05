const mongoose= require('mongoose');

const appointmentSchema= mongoose.Schema({
   doctorID: String,
   userID: String,
   serviceID: String,
   date:String,
   time: String
},{versionKey: false});

const AppointmentModel= mongoose.model("appointment", appointmentSchema)

module.exports={AppointmentModel}