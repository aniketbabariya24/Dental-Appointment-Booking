const mongoose= require('mongoose');

const appointmentSchema= mongoose.Schema({
   doctor: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor"
   }],
   user: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
   }],
   service: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "service"
   }],
   date:String,
   time: String
},{versionKey: false});

const AppointmentModel= mongoose.model("appointment", appointmentSchema)

module.exports={AppointmentModel}