const express = require('express');

const { getDoctor , addDoctor , updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');

const doctorRouter = express.Router();


doctorRouter.get('/', getDoctor);


doctorRouter.post('/add', addDoctor);


doctorRouter.patch('/update/:id', updateDoctor);


doctorRouter.delete('/delete/:id', deleteDoctor);

module.exports = { doctorRouter }  


