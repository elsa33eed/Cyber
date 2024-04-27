const mongoose = require('./db');

const AccessorySchema = new mongoose.Schema({
    "_id": { type: Number },
    "BrandName": { type: String },
    "ModelName": { type: String },
    "Picture": { type: String },
    "CategoryId": { type: Number },
    "Color": { type: String },
    "ReleaseYear": { type: Number },
    "Description": { type: String },
    "Quantity": { type: Number },
    "Price":{type:Number}
});
const Accessory = mongoose.model("Accessories", AccessorySchema);

const getAllAccessories = async () => {
    const Accessories = await Accessory.find({})
    return Accessories;
}

const getAccessoriesByCategory = async(ProductsCategory)=>{
    const foundedAccessories = await Accessory.find({CategoryId:ProductsCategory})
    return foundedAccessories;
}

const getAccessory = async (id) => {
    const foundedAccessory = await Accessory.find({_id:id})
    return foundedAccessory;
}

const updateAccessory = async (id, data)=>{
    var updatedAccessory = await Accessory.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedAccessory;
}

const deleteAccessory = async (id)=>{
    await Accessory.findByIdAndDelete(id)
}

const addAccessory = async (data)=>{
    var maxIdAccessory = await Accessory.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdAccessory ? maxIdAccessory._id : 0;
    data._id = maxId+1;
    var newAccessory = await new Accessory(data);
    await newAccessory.save();
    return newAccessory  
}
module.exports= {
    getAllAccessories,
    getAccessoriesByCategory,
    getAccessory,
    updateAccessory,
    deleteAccessory,
    addAccessory
}