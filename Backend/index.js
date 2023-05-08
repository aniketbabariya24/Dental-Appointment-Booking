const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


const app = express();



require("dotenv").config();


// --------------->>>>>>>> Location of Routes & Middlewares <<<<<<<<-------------------
const { dbconnetion } = require("./configs/db");
const { logsData } = require("./middlewares/log.middleware");
const { userRouter } = require("./routes/user.route");
const { adminRouter } = require("./routes/admin.router");
const {serviceRouter}= require("./routes/service.route");
const {appointmentRouter}= require("./routes/appointment.route");
const {doctorRouter}= require("./routes/doctor.route");
const { authenticate } = require("./middlewares/authentication");
const { GntRouter } = require("./routes/generateNewToken.route");
const { LogoutRouter } = require("./routes/logout.route");
const { feedbackRouter } = require("./routes/feedbackForm.route");




// --------------->>>>>>>> Middlewares <<<<<<<<-------------------
app.use(cors());
app.use(cookieParser());
app.use(express.json());




const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Dental Appointment System",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8080",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));







// --------------->>>>>>>> Default End Point <<<<<<<<-------------------
app.get("/", (req, res) =>
  res.send(
    `<h1 style="text-align:Center;color:blue">Welcome in Dent Care API</h1>`
  )
);


// --------------->>>>>>>> Routers <<<<<<<<-------------------
app.use(logsData);
app.use("/users", userRouter);
app.use("/doctors", doctorRouter);
app.use("/services", serviceRouter);
app.use("/appointments", appointmentRouter);
app.use("/admin", adminRouter);

app.use(authenticate);
app.use("/newtoken", GntRouter);
app.use("/logout", LogoutRouter);
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
