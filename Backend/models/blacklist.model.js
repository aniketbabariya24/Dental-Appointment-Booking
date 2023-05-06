const mongoose = require('mongoose');

const blackListSchema = mongoose.Schema({
    tokenList:String
});

const blackListModel = mongoose.model('blacklistTokenList' , blackListSchema);

module.exports = { blackListModel };

