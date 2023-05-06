const express = require('express');

const { getService, addService, updateService, deleteService} = require('../controllers/service.controller');

const serviceRouter = express.Router();


serviceRouter.get('/', getService);


serviceRouter.post('/add', addService);


serviceRouter.patch('/update/:id', updateService);


serviceRouter.delete('/delete/:id', deleteService);


module.exports = { serviceRouter }  