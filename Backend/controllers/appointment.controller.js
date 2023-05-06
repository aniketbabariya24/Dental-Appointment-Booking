const { AppointmentModel } = require("../models/appointment.model");


const getAppointment = async (req, res) => {
    try {
        const data = await AppointmentModel.find().populate('doctor').populate('user').populate('service')
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const addAppointment=async (req,res)=>{
    const { date, time, doctorID, serviceID, userID} = req.body;
    try {
        const appointment= new AppointmentModel({date,time, doctor:doctorID, service: serviceID, user: userID});
        await appointment.save();

        res.send("Appointment Booked succesfully", appointment)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const updateAppointment = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    console.log(ID,payload)
    try {
        await AppointmentModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(200).send({
            Message: "Appointment successfully Updated",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const deleteAppointment = async (req, res) => {
    const ID = req.params.id;
    try {
        await AppointmentModel.findByIdAndDelete({ _id: ID })
        res.status(200).send({
            Message: "Appointment successfully deleted",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


module.exports = {  getAppointment, addAppointment, updateAppointment, deleteAppointment }
