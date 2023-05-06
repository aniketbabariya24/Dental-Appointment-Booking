const jwt = require("jsonwebtoken");
const fs = require("fs");
const { blackListModel } = require("../models/blacklist.model");

require("dotenv").config();

const authenticate = async (req, res, next) => {
  try {
    const normalToken = req.cookies.Normal_Token || "";

<<<<<<< HEAD
if(!token){
    res.send("Login First");
}
const blackData= JSON.parse(fs.readFileSync("../blacklist.json", "utf-8"));
if(blackData.includes(blackData)){
   return res.send("Token is in BlackList")
}

    jwt.verify(token, process.env.NORMALKEY, (err, decoded)=> {
        if(err){
            res.send({"message": "Log in Again ! please", "error": err.message})
        }else{
            next();
        }
      });  
=======
    // Check if the token is blacklisted
    const blacklistedToken = await blackListModel.findOne({
      tokenList: normalToken,
    });

    if (blacklistedToken) {
      return res.status(401).json({ message: "Please login again" });
    }
>>>>>>> 739f5c10197f56d73d5280e89b4e4515cfd9bfc4

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
