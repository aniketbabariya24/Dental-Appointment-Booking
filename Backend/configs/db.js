require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const dbconnetion = mongoose.connect(process.env.MONGOURL)


module.exports = {dbconnetion} 