const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abdallaatef12:Cyper01@cypercluster.hh8y4fx.mongodb.net/cyper');
let db  = mongoose.connection;
db.on("error",()=>{
    console.log("Error Connecting to DB");
})
db.once("open",()=>{
    console.log("Connected to DB");
})
module.exports = mongoose;