const { DoctorModel } = require("../models/doctors.model");


const getDoctor = async (req, res) => {
    try {
        const data = await DoctorModel.find()
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const addDoctor = async (req, res) => {
    const payload = req.body;
    try {
        const data = new DoctorModel(payload);
        await data.save();
        res.status(200).send({
            Message: "Doctor added successfully",
        });
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const updateDoctor = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    console.log(ID,payload)
    try {
        await DoctorModel.findByIdAndUpdate({ _id: ID }, payload)
        res.status(200).send({
            Message: "Doctor successfully Updated",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}

const deleteDoctor = async (req, res) => {
    const ID = req.params.id;
    try {
        await DoctorModel.findByIdAndDelete({ _id: ID })
        res.status(200).send({
            Message: "Doctor successfully deleted",
        });
    }
    catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


module.exports = {  getDoctor, addDoctor, updateDoctor, deleteDoctor }
