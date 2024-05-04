const mongoose = require('./db');

const MobileSchema = new mongoose.Schema({
    "_id": { type: Number },
    "BrandName": { type: String },
    "ModelName": { type: String },
    "Picture": { type: String },
    "OS": { type: String },
    "Storage": { type: String },
    "Color": { type: String },
    "Screen": { type: String },
    "Battery": { type: String },
    "ReleaseYear": { type: Number },
    "Description": { type: String },
    "Quantity": { type: Number },
    "Price":{type:Number}
});
const mobile = mongoose.model("Mobiles", MobileSchema);

const getAllMobiles = async () => {
    const mobiles = await mobile.find({})
    return mobiles;
}

const getMobile = async (id) => {
    const foundedMobile = await mobile.find({_id:id})
    return foundedMobile;
}

const updateMobile = async (id, data)=>{
    var updatedMobile = await mobile.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedMobile;
}

const deleteMobile = async (id)=>{
    await mobile.findByIdAndDelete(id)
}

const addMobile = async (data)=>{
    var maxIdMobile = await mobile.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdMobile ? maxIdMobile._id : 0;
    data._id = maxId+1;
    var newMobile = await new mobile(data);
    await newMobile.save();
    return newMobile
    
}
module.exports= {
    getAllMobiles,
    getMobile,
    updateMobile,
    deleteMobile,
    addMobile
}