const express = require('express');

const {  getAppointment, addAppointment, updateAppointment, deleteAppointment} = require('../controllers/appointment.controller');

const appointmentRouter = express.Router();


appointmentRouter.get('/', getAppointment);


appointmentRouter.post('/add', addAppointment);


appointmentRouter.patch('/update/:id', updateAppointment);


appointmentRouter.delete('/delete/:id', deleteAppointment);

module.exports = { appointmentRouter }  


