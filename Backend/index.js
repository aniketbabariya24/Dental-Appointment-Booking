const express= require('express');
const app= express();
const cors = require("cors");
const cookieParser = require("cookie-parser");



require('dotenv').config();


const {connection}= require('./configs/db');
const { logsData } = require('./middlewares/log.middleware');
const {authenicate}= require('./middlewares/authentication')
const {userRouter}= require('./routes/user.route');
const { adminRouter } = require('./routes/admin.router');



app.use(express.json());




app.use(logsData);
app.use("/users", userRouter);
app.use("/admin", adminRouter);




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