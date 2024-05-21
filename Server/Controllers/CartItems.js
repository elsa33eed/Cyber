const CartItemsValid = require("../Utils/CartItemsValid")
const CartItemsModel = require("../Models/CartItems")

const getAllCartItems = async (req, res) => {
    const CartItems = await CartItemsModel.getAllCartItems();
    res.json(CartItems);
}

const getCartItemByID = async (req, res) => {
    var ID = req.params.id;
    var foundedCartItem = await CartItemsModel.getCartItem(ID);
    res.json(foundedCartItem);
}

const getCartItemsByShoppingCartID = async (req, res) => {
    var ID = req.params.ShoppingCartId
    var foundedCartItems = await CartItemsModel.getCartItemsByShoppingCartID(ID);
    res.json(foundedCartItems);
}

const updateCartItemByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (CartItemsValid(data)) {
        var updatedCartItem = await CartItemsModel.updateCartItem(ID, data)
        res.json(updatedCartItem)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteCartItemsByShoppingCartID = async (req,res) => {
    var ID = req.params.ShoppingCartID;
    await CartItemsModel.deleteCartItemsByShoppingCartID(ID);
    res.json({ message: "Cart Items Deleted Succesfully"});
}

const deleteCartItemByID = async (req, res) => {
    var ID = req.params.id
    await CartItemsModel.deleteCartItem(ID)
    var data = await CartItemsModel.getAllCartItems();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addCartItem = async (req, res) => {
    var data = req.body;
    if (CartItemsValid(data)) {
        var newCartItem = await CartItemsModel.addCartItem(data);
        res.json(newCartItem);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllCartItems,
    getCartItemByID,
    getCartItemsByShoppingCartID,
    deleteCartItemsByShoppingCartID,
    updateCartItemByID,
    deleteCartItemByID,
    addCartItem
}