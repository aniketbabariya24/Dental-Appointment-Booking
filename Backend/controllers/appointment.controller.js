const { AppointmentModel } = require("../models/appointment.model");
const { sendEmail } = require("../services/mail");


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

        const data = await AppointmentModel.findOne({_id:appointment._id}).populate('doctor').populate('user').populate('service')

        
        sendEmail({email:data.user[0].email,subject:`Your Appointment has Successfully Booked.`,body:`Dear ${data.user[0].name},<br>

        Thank you for booking an appointment with our denist. This email is to confirm that your appointment with our experienced doctor, <b> ${data.doctor[0].name} </b>, has been successfully scheduled for a <b>  ${data.service[0].name} on ${date} at ${time} </b> .<br>

        Please make sure to arrive on time for your appointment to ensure that we can provide you with the best possible service.<br>We kindly request that you notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.<br>
        
        If you have any questions or concerns, please do not hesitate to contact us at dentcare247@gmail.com.<br>
        
        We look forward to seeing you soon!<br>
        
        Best regards,<br>
        DENTCARE`});


        res.status(200).json("Appointment Booked succesfully", appointment)
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
