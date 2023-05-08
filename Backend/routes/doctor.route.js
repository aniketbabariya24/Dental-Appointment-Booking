const express = require('express');

const { getDoctor , addDoctor , updateDoctor , deleteDoctor} = require('../controllers/doctor.controller');

const doctorRouter = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - about
 *         - qualification
 *         - experience
 *         - language
 *         - licenceNumber
 *         - charge
 *         - timings
 *       properties:
 *         name:
 *           type: string
 *           description: Doctor's name
 *         image:
 *           type: string
 *           description: Doctor's email
 *         about:
 *           type: string
 *           description: Doctor's about
 *         qualification:
 *           type: string
 *           description: Doctor's qualification
 *         experience:
 *           type: number
 *           description: Doctor's experience
 *         language:
 *           type: string
 *           description: Doctor's language
 *         licenceNumber:
 *           type: number
 *           description: Doctor's licenceNumber
 *         charge:
 *           type: string
 *           description: Doctor's charge
 *         timings:
 *           type: number
 *           description: Doctor's timings
 *       example:
 *         name: Teeth Cleaning
 *         image: imageLink
 *         about: doctor about
 *         qualification: doctor qualification
 *         experience: 25
 *         language: doctor language
 *         licenceNumber: 454585
 *         charge: 8000
 *         timings: doctor timings
 */

 /**
  * @swagger
  * tags:
  *   name: Doctors
  *   description: The Doctor managing APIs
  */

/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: Returns the list of all the Doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: The list of the Doctors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doctor'
 */


doctorRouter.get('/', getDoctor);


/**
 * @swagger
 * /doctors/add:
 *   post:
 *     summary: Create a new Doctor
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Doctor'
 *     responses:
 *       200:
 *         description: The Doctor was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Some server error
 */


doctorRouter.post('/add', addDoctor);


/**
 * @swagger
 * /doctors/update/{id}:
 *  patch:
 *    summary: Update the Doctor by the id
 *    tags: [Doctors]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Doctor id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Doctor'
 *    responses:
 *      200:
 *        description: The Doctor was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Doctor'
 *      404:
 *        description: The Doctor was not found
 *      500:
 *        description: Some error happened
 */


doctorRouter.patch('/update/:id', updateDoctor);


/**
 * @swagger
 * /doctors/delete/{id}:
 *   delete:
 *     summary: Remove the doctor by id
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The doctor id
 * 
 *     responses:
 *       200:
 *         description: The doctor was deleted
 *       404:
 *         description: The doctor was not found
 */


doctorRouter.delete('/delete/:id', deleteDoctor);



module.exports = { doctorRouter }  


