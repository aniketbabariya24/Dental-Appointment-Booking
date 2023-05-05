const express = require ("express");
const { GenerateToken } = require("../controllers/generate.token.controller");


const GntRouter = express.Router();

GntRouter.get("/", GenerateToken );

module.exports = { GntRouter };
