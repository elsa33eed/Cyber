const mongoose = require('./db');

const ShoppingCartSchema = new mongoose.Schema({
    "_id": { type: Number },
    "UserId": { type: Number },
    "Total": { type: Number }
});
const ShoppingCart = mongoose.model("ShoppingCarts", ShoppingCartSchema);

const getAllShoppingCarts = async () => {
    const ShoppingCarts = await ShoppingCart.find({})
    return ShoppingCarts;
}

const getShoppingCart = async (id) => {
    const foundedShoppingCart = await ShoppingCart.find({_id:id})
    return foundedShoppingCart;
}

const getShoppingCartByUserID = async (id) => {
    const foundedShoppingCart = await ShoppingCart.find({UserId:id})
    return foundedShoppingCart;
}

const updateShoppingCart = async (id, data)=>{
    var updatedShoppingCart = await ShoppingCart.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedShoppingCart;
}

const deleteShoppingCart = async (id)=>{
    await ShoppingCart.findByIdAndDelete(id)
}

const addShoppingCart = async (data)=>{
    var maxIdShoppingCart = await ShoppingCart.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdShoppingCart ? maxIdShoppingCart._id : 0;
    data._id = maxId+1;
    var newShoppingCart = await new ShoppingCart(data);
    await newShoppingCart.save();
    return newShoppingCart  
}
module.exports= {
    getAllShoppingCarts,
    getShoppingCart,
    getShoppingCartByUserID,
    updateShoppingCart,
    deleteShoppingCart,
    addShoppingCart
}