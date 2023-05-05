const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();


require("dotenv").config();


// --------------->>>>>>>> Location of Routes & Middlewares <<<<<<<<-------------------
const { dbconnetion } = require("./configs/db");
const { logsData } = require("./middlewares/log.middleware");
const { authentication } = require("./middlewares/authentication");
const { userRouter } = require("./routes/user.route");
const { adminRouter } = require("./routes/admin.router");
const { feedbackRouter } = require("./routes/feedbackForm.route");



// --------------->>>>>>>> Middlewares <<<<<<<<-------------------
app.use(cors());
app.use(cookieParser());
app.use(express.json());


// --------------->>>>>>>> Default End Point <<<<<<<<-------------------
app.get("/", (req, res) =>
  res.send(
    `<h1 style="text-align:Center;color:blue">Welcome in Dent Care API</h1>`
  )
);


// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use(logsData);
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/feedback", feedbackRouter);



// --------------->>>>>>>> Server Running <<<<<<<<-------------------
app.listen(process.env.PORT, async () => {
  try {
    await dbconnetion;
    console.log(`Connected to Database`);
    console.log(`Server listening on ${process.env.PORT}`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});
