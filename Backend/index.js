const express= require('express');
const app= express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

require('dotenv').config();


const {connection}= require('./configs/db');
const {authenicate}= require('./middlewares/authentication')

const {userRouter}= require('./routes/user.route')

app.use(express.json());


// app.use(authenicate)

app.use("/users", userRouter);

app.listen(8080, async()=>{
 try {
    await connection;
    console.log("Connected to DB");
 } catch (error) {
    console.log("Error While Connected to DB");
    console.log(error);
 }
 console.log("Runnig on YOUr Port");
})