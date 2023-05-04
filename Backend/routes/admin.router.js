const express = require("express");

// --------------->>>>>>>> Admin Controller <<<<<<<<-------------------
const { adminLogin } = require("../controllers/admin.controller");

const adminRouter = express.Router();

// --------->>>> POST <<<<<--------- 
AdminRouter.post("/login",adminLogin);


module.exports = { adminRouter };