// const mongoose = require('./db');

// const CartSchema = new mongoose.Schema({
//     "_id": { type: Number },
//     "Quantity": { type: Number },
//     "UserId": { type: Number },
//     "BrandName": { type: String },
//     "ModelName": { type: String },
//     "Picture": { type: String },
//     "Processor": { type: String },
//     "Hard": { type: String },
//     "GraphicCard": {type:String},
//     "Color": { type: String },
//     "Screen": { type: String },
//     "Ram": { type: String },
//     "Description": { type: String },
//     "Price":{type:Number}
// });
// const laptop = mongoose.model("Laptops", LaptopSchema);

// const getAllLaptops = async () => {
//     const laptops = await laptop.find({})
//     return laptops;
// }

// const getLaptop = async (id) => {
//     const foundedLaptop = await laptop.find({_id:id})
//     return foundedLaptop;
// }

// const updateLaptop = async (id, data)=>{
//     var updatedLaptop = await laptop.findByIdAndUpdate(id, data, {new:true, runValidators:true})
//     return updatedLaptop;
// }

// const deleteLaptop = async (id)=>{
//     await laptop.findByIdAndDelete(id)
// }

// const addLaptop = async (data)=>{
//     var maxIdLaptop = await laptop.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
//     var maxId = maxIdLaptop ? maxIdLaptop._id : 0;
//     data._id = maxId+1;
//     var newLaptop = await new laptop(data);
//     await newLaptop.save();
//     return newLaptop
    
// }
// module.exports= {
//     getAllLaptops,
//     getLaptop,
//     updateLaptop,
//     deleteLaptop,
//     addLaptop
// }