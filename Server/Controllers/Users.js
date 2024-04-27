const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require('../Models/Users');
const LoginValid = require('../Utils/LoginValid');
const RegisterationValid = require('../Utils/RegisterationValid');

const getAllUsers = async (req, res) => {
    const users = await UserModel.getAllUsers();
    res.json(users);
}

const getUserByID = async (req, res) => {
    var ID = req.params.id;
    var foundedUser = await UserModel.getUser(ID);
    res.json(foundedUser);
}

const updateUserByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (RegisterationValid(data)) {
        var salt = await bcrypt.genSalt(10);
        data.Password = await bcrypt.hash(data.Password,salt)
        var updatedUser = await UserModel.updateUser(ID, data)
        res.json(updatedUser)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteUserByID = async (req, res) => {
    var ID = req.params.id
    await UserModel.deleteUser(ID)
    var data = await UserModel.getAllUsers();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const Registration = async (req, res) => {
        if(!RegisterationValid(req.body)){return res.status(404).json({ message: "Validation Error" });}
        var founded = await UserModel.checkEmail(req.body);
        if (founded){return res.status(400).json({ message: "User Already Exist"});}
        var userData = req.body;
        var salt = await bcrypt.genSalt(10);
        userData.Password = await bcrypt.hash(userData.Password,salt)
        var newUser =  await UserModel.addUser(userData)
        var Token =  jwt.sign({User_id:newUser._id,adminRole:newUser.IsAdmin},"secretKeyforCyber");
        res.header('x-auth-token',Token)
        res.status(201).json(newUser);
}

const Login = async (req,res)=>{
    if(!LoginValid(req.body)){return res.status(404).json({ message: "Validation Error" });}
    var founded = await UserModel.checkEmail(req.body);
    if (!founded){return res.status(400).json({ message: "Invalid email or password" });}
    var validPass = await bcrypt.compare(req.body.Password,founded.Password)
    if (!validPass){ return res.status(400).json({ message: "Invalid email or password" });}
    var Token = jwt.sign({User_id:founded._id,adminRole:founded.IsAdmin},"secretKeyforCyber");
    res.header('x-auth-token',Token)
    res.status(201).json({ message: "Log-In Succesfully" });
}
module.exports = {
    getAllUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID,
    Registration,
    Login
}