const jwt = require("jsonwebtoken");
const fs = require("fs");

require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    const Normal_Token = req.cookies.Normal_Token || "";

    // blacklisted 
    const blacklistedToken = JSON.parse(
      fs.readFileSync("./blacklist.json", "utf-8")
    );

    if (blacklistedToken.includes(Normal_Token)) {
      res.status(401).json({ message: "please login again" });
    } else {
      jwt.verify(Normal_Token, process.env.NORMALKEY, (err, decoded) => {
        if (err) res.status(err).json({ message: err.message });
        else {
          next();
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { authenticate }
