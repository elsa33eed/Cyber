const mongoose = require('./db');

const UsersSchema = new mongoose.Schema({
    "_id": { type: Number },
    "FirstName":{type:String},
    "LastName":{type:String},
    "Username": {type: String},
    "Email": {type: String}, 
    "Password": {type: String},
    "Telephone":{type: String},
    "IsAdmin": {type: Boolean}
});
const user = mongoose.model("Users", UsersSchema);

const getAllUsers = async () => {
    const users = await user.find({})
    return users;
}

const getUser = async (id) => {
    const foundedUser = await user.find({_id:id})
    return foundedUser;
}

const updateUser = async (id, data)=>{
    var updatedUser = await user.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedUser;
}

const deleteUser = async (id)=>{
    await user.findByIdAndDelete(id)
}

const addUser = async (data)=>{
    var maxIdUser = await user.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdUser ? maxIdUser._id : 0;
    data._id = maxId+1;
    var newUser = await new user(data);
    await newUser.save();
    return newUser
    
}
const checkEmail = async (data)=>{
    var founded = await user.findOne({Email:data.Email});
    return founded;
}
module.exports= {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    addUser,
    checkEmail
}