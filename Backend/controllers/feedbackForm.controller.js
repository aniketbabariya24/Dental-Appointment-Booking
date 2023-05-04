// --------------->>>>>>>> Feedback Model Location <<<<<<<<-------------------

const { feedbackModel } = require("../models/feedbackForm.model");


// --------->>>> POST <<<<<---------

const feedbackPostData = async (req,res) => {
    try {
        const data = req.body;

        const form = new feedbackModel(data);
        await form.save();

        res.status(200).json("Feedback Updated");
    } catch (error) {
        res.status(404).send({
            Message: "Bad request 404",
        });
    }
}


module.exports = { feedbackPostData }