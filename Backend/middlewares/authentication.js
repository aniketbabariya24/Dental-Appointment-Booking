const jwt = require("jsonwebtoken");
const { blackListModel } = require("../models/blacklist.model");

require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const normalToken = req.cookies.Normal_Token || "";


    // Check if the token is blacklisted
    const blacklistedToken = await blackListModel.findOne({
      tokenList: normalToken,
    });

    if (blacklistedToken) {
      return res.status(401).json({ message: "Please login again" });
    }


    // Verify the token
    jwt.verify(normalToken, process.env.NORMALKEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      next();
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { authenticate };
