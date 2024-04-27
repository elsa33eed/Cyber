const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cyper');
let db  = mongoose.connection;
db.on("error",()=>{
    console.log("Error Connecting to DB");
})
db.once("open",()=>{
    console.log("Connected to DB");
})
module.exports = mongoose;