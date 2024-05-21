const mongoose = require('./db');

const DiscountSchema = new mongoose.Schema({
    "_id": { type: Number },
    "DiscountName": { type: String },
    "Description": { type: String },
    "DiscountPercent": { type: Number },
    "Active": { type: Boolean }
});
const Discount = mongoose.model("Discounts", DiscountSchema);

const getAllDiscounts = async () => {
    const Discounts = await Discount.find({})
    return Discounts;
}

const getDiscount = async (id) => {
    const foundedDiscount = await Discount.find({_id:id})
    return foundedDiscount;
}

const updateDiscount = async (id, data)=>{
    var updatedDiscount = await Discount.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedDiscount;
}

const deleteDiscount = async (id)=>{
    await Discount.findByIdAndDelete(id)
}

const addDiscount = async (data)=>{
    var maxIdDiscount = await Discount.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdDiscount ? maxIdDiscount._id : 0;
    data._id = maxId+1;
    var newDiscount = await new Discount(data);
    await newDiscount.save();
    return newDiscount  
}
module.exports= {
    getAllDiscounts,
    getDiscount,
    updateDiscount,
    deleteDiscount,
    addDiscount
}