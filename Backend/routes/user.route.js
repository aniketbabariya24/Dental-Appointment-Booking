const express = require ("express");

const {signup ,login ,allUsers ,getUser} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", allUsers);

userRouter.get("/:id", getUser);

userRouter.post("/register", signup);

userRouter.post("/login", login);

// userRouter.get("/pp", logout);

module.exports = { userRouter }  