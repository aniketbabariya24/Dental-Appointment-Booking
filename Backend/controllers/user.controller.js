const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();


const { UserModel } = require("../models/user.model");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isPresent = await UserModel.find({ email });

        if (isPresent.length === 0) {
            // encrypte password and register
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) res.status(401).json({ error: err.message });
                else {
                    const newUser = new UserModel({
                        name,
                        email,
                        password: hash,
                    });
                    await newUser.save();
                    res.status(200).json({
                        success: "user registered successfully",
                    });
                }
            });
        } else {
            res.status(404).json({ error: "user already registered" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const UserData = await UserModel.findOne({ email });

        if (!UserData) {
            return res.status(404).json({ error: "user not found" });
        }
        const hashPassword = UserData?.password;
        bcrypt.compare(password, hashPassword, (err, result) => {
            if (result) {
                const normalToken = jwt.sign(
                    { userId: UserData._id },
                    process.env.NORMALKEY,
                    { expiresIn: "7d" }
                );
                const refreshToken = jwt.sign(
                    { userId: UserData._id },
                    process.env.REFRESHKEY,
                    { expiresIn: "7d" }
                );

                res.cookie("normalToken", normalToken, { httpOnly: true });
                res.cookie("refreshToken", refreshToken, { httpOnly: true });
                res.status(200).json({
                    message: "Login successfully",
                    normalToken,
                    refreshToken,
                    name: UserData["name"],
                    email,
                    userid: UserData["_id"],
                });
            } else {
                res.status(401).json({ error: "error while login" });
            }
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


const allUsers = async (req, res) => {
    try {
        if (req.body.access_key === process.env.ACCESSKEY) {
            const UserData = await UserModel.find();
            res.status(200).json({ UserData });
        } else {
            res.status(401).json({ error: "Access denied" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getUser = async (req, res) => {
    const _id = req.params.id;
    try {
        if (req.body.access_key === process.env.ACCESSKEY) {
            const UserData = await UserModel.findOne({ _id });
            res.status(200).json({ UserData });
        } else {
            res.status(401).json({ error: "Access denied" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//  const logout=(req,res)=>{
//     const token= req.headers.authorization;
//     const blackData= JSON.parse(fs.readFileSync("./blacklist.json", "utf-8"));
//     blackData.push(token);
//     fs.writeFileSync("../", JSON.stringify(blackData));
//     console.log(blackData);
//     res.send("LogOut Succesfully")
// }

module.exports = { signup, login, allUsers, getUser };
