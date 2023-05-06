const mongoose= require('mongoose');

const appointmentSchema= mongoose.Schema({
   doctor: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
   }],
   user: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
   }],
   service: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
   }],
   date:String,
   time: String
},{versionKey: false});

const AppointmentModel= mongoose.model("appointment", appointmentSchema)

module.exports={AppointmentModel}