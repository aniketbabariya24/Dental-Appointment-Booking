const express = require("express");
const { LogoutData } = require("../controllers/logout.controller");

const LogoutRouter = express.Router();

LogoutRouter.get('/', LogoutData)
 
 
module.exports = { LogoutRouter }