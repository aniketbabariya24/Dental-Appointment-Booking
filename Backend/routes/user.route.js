const express = require ("express");

// --------------->>>>>>>> Male Service Controller <<<<<<<<-------------------
const {signup ,login ,getalluser ,getUser} = require("../controllers/user.controller");

const userRouter = express.Router();


// --------->>>> GET <<<<<---------



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           description: User's email
 *       example:
 *         id: d5fE_asz
 *         name: Aniket Babariya
 *         email: aniketb@gmail.com
 */

 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: The User managing API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Uers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */



userRouter.get("/", getalluser);

// --------->>>> GET BY ID<<<<<---------
userRouter.get("/:id", getUser);

// --------->>>> POST SIGN UP <<<<<---------
userRouter.post("/register", signup);

// --------->>>> POST <<<<<--------- 
userRouter.post("/login", login);


// userRouter.get("/pp", logout);


module.exports = { userRouter }  

