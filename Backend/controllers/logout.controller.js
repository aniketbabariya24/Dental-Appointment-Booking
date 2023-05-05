const fs = require("fs");

const LogoutData =  async (req, res)=>{
    const Normal_Token = req.cookies.Normal_Token ||""

    const blacklisteddata = JSON.parse(fs.readFileSync("./blacklist.json","utf-8"))

    blacklisteddata.push(Normal_Token)

    fs.writeFileSync("./blacklist.json",JSON.stringify(blacklisteddata))

    res.status(200).send("Log Out Successfully");
}

module.exports = { LogoutData }