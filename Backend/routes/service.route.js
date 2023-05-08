const express = require('express');

const { getService, addService, updateService, deleteService} = require('../controllers/service.controller');

const serviceRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - details
 *       properties:
 *         name:
 *           type: string
 *           description: Service's name
 *         image:
 *           type: string
 *           description: Service's email
 *         details:
 *           type: string
 *           description: Service's email
 *       example:
 *         name: Teeth Cleaning
 *         image: imageLink
 *         details: details
 */

 /**
  * @swagger
  * tags:
  *   name: Services
  *   description: The Service managing APIs
  */

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Returns the list of all the Services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: The list of the Services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */

serviceRouter.get('/', getService);


/**
 * @swagger
 * /services/add:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The service was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       500:
 *         description: Some server error
 */


serviceRouter.post('/add', addService);

/**
 * @swagger
 * /services/update/{id}:
 *  patch:
 *    summary: Update the Service by the id
 *    tags: [Services]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The service id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Service'
 *    responses:
 *      200:
 *        description: The Service was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Service'
 *      404:
 *        description: The Service was not found
 *      500:
 *        description: Some error happened
 */
serviceRouter.patch('/update/:id', updateService);


/**
 * @swagger
 * /services/delete/{id}:
 *   delete:
 *     summary: Remove the service by id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 * 
 *     responses:
 *       200:
 *         description: The service was deleted
 *       404:
 *         description: The service was not found
 */


serviceRouter.delete('/delete/:id', deleteService);


module.exports = { serviceRouter }  