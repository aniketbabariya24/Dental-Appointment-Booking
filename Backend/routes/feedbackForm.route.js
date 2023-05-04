const express = require('express');

// --------------->>>>>>>> Feedback Service Controller <<<<<<<<-------------------
const { feedbackPostData } = require('../controllers/feedbackForm.controller');

const feedbackRouter = express.Router();


// --->>>> POST <<<<<--- 
feedbackRouter.post('/form', feedbackPostData )


module.exports = { feedbackRouter };