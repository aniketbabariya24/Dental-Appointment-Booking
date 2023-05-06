const jwt= require('jsonwebtoken');
require('dotenv').config();
const fs= require('fs');

const authentication= (req,res,next)=>{

    const token= req.headers.authorization

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

}

module.exports={ authentication }