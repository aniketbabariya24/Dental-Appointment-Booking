// --------->>>> Logs Model Location <<<<<---------
const { logModel } = require("../models/logModel");


const logsData = async (req,res,next) => {
    try {
        const data = new logModel({
            DateandTime: `${new Date()}`,
            Method: `${req.method}`,
            URL: `${req.url}`,
            IP: `${req.ip}`
        })
        await data.save();
        next();
    } catch (error) {
        res.status(404).send({
            "Message": "Error in Middleware Logs"
        })
    }
}

module.exports = { logsData }