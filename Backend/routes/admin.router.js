const express = require("express");

// --------------->>>>>>>> Admin Controller <<<<<<<<-------------------
const { adminLogin } = require("../controllers/admin.controller");

const AdminRouter = express.Router();

// --------->>>> POST <<<<<--------- 
AdminRouter.post("/login",adminLogin);


module.exports = { AdminRouter };