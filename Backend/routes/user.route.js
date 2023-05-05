const express = require ("express");

// --------------->>>>>>>> Male Service Controller <<<<<<<<-------------------
const {signup ,login ,getalluser ,getUser} = require("../controllers/user.controller");

const userRouter = express.Router();


// --------->>>> GET <<<<<---------
userRouter.get("/", getalluser);

// --------->>>> GET BY ID<<<<<---------
userRouter.get("/:id", getUser);

// --------->>>> POST SIGN UP <<<<<---------
userRouter.post("/register", signup);

// --------->>>> POST <<<<<--------- 
userRouter.post("/login", login);


module.exports = { userRouter }  

