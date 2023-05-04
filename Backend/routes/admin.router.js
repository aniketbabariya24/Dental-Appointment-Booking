const express = require("express");

// --------------->>>>>>>> Admin Controller <<<<<<<<-------------------
const { adminLogin } = require("../controllers/admin.controller");

const adminRouter = express.Router();

// --------->>>> POST <<<<<--------- 
adminRouter.post("/login",adminLogin);


module.exports = { adminRouter };