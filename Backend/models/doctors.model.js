const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name:          {type: String,required: true},
    image:         {type: String,required: true},
    about:         {type: String,required: true},
    qualification: {type: String,required: true},
    experience:    {type: Number,required: true},
    language:      {type: String,required: true},
    licenceNumber: {type: Number,required: true},
    charge:        {type: Number,required: true},
    timings:       {type: String,required: true},
  },
  { versionKey: false }
);

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = { DoctorModel };
