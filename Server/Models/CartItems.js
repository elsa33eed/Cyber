const mongoose = require('./db');

const CartItemSchema = new mongoose.Schema({
    "_id": { type: Number },
    "ShoppingCartID": { type: Number },
    "ProductID": { type: Number },
    "Quantity": { type: Number },
    "Total": { type: Number}
});
const CartItem = mongoose.model("CartItems", CartItemSchema);

const getAllCartItems = async () => {
    const CartItems = await CartItem.find({})
    return CartItems;
}

const getCartItem = async (id) => {
    const foundedCartItem = await CartItem.find({_id:id})
    return foundedCartItem;
}

const getCartItemsByShoppingCartID = async (id) => {
    const foundedCartItems = await CartItem.find({ShoppingCartID:id})
    return foundedCartItems;
}

const updateCartItem = async (id, data)=>{
    var updatedCartItem = await CartItem.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedCartItem;
}

const deleteCartItem = async (id)=>{
    await CartItem.findByIdAndDelete(id)
}

const deleteCartItemsByShoppingCartID = async (id) => {
    var foundedCartItems = await CartItem.find({ShoppingCartID:id})
    foundedCartItems.forEach(async (Item)=>{await CartItem.findByIdAndDelete(Item._id)})
}

const addCartItem = async (data)=>{
    var maxIdCartItem = await CartItem.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdCartItem ? maxIdCartItem._id : 0;
    data._id = maxId+1;
    var newCartItem = await new CartItem(data);
    await newCartItem.save();
    return newCartItem  
}
module.exports= {
    getAllCartItems,
    getCartItem,
    getCartItemsByShoppingCartID,
    deleteCartItemsByShoppingCartID,
    updateCartItem,
    deleteCartItem,
    addCartItem
}