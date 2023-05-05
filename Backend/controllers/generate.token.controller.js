const jwt = require ("jsonwebtoken");
require("dotenv").config();

const GenerateToken = async (req, res) => {
    const refreshtoken = req.cookies.Refresh_Token || "";
  
    if (!refreshtoken) res.status(401).send({ Message: "Please Login Again" });
  
    jwt.verify(refreshtoken, process.env.REFRESHKEY, (err, decoded) => {
      if (err) {
        res.status(401).send({ Message: "Contact to Administrator" });
      } else {
        const Normal_Token = jwt.sign(
          {
            UserId: decoded._id,
            UserRole: decoded.Role,
          },
          process.env.NORMALKEY,
          {
            expiresIn: "7d",
          }
        );
  
        res.cookie("Normal_Token", Normal_Token, { httpOnly: true });
  
        res.status(200).send({
          Message: "Login Successfully",
          Normal_Token: Normal_Token,
        });
      }
    });
  }

  module.exports = { GenerateToken }