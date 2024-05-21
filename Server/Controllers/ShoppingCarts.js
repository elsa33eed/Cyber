const ShoppingCartsValid = require("../Utils/ShoppingCartsValid")
const ShoppingCartsModel = require("../Models/ShoppingCarts")
const CartItemCModel = require("../Models/CartItems")

const getAllShoppingCarts = async (req, res) => {
    const ShoppingCarts = await ShoppingCartsModel.getAllShoppingCarts();
    res.json(ShoppingCarts);
}

const getShoppingCartByID = async (req, res) => {
    var ID = req.params.id;
    var foundedShoppingCart = await ShoppingCartsModel.getShoppingCart(ID);
    res.json(foundedShoppingCart);
}

const getShoppingCartByUserID = async (req, res) => {
    var ID = req.params.UserID;
    var foundedShoppingCart = await ShoppingCartsModel.getShoopingCartByUserID(ID);
    res.json(foundedShoppingCart);
}

const updateShoppingCartByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (ShoppingCartsValid(data)) {
        var updatedShoppingCart = await ShoppingCartsModel.updateShoppingCart(ID, data)
        res.json(updatedShoppingCart)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteShoppingCartByID = async (req, res) => {
    var ID = req.params.id
    await CartItemCModel.deleteCartItemsByShoppingCartID(ID)
    await ShoppingCartsModel.deleteShoppingCart(ID)
    var data = await ShoppingCartsModel.getAllShoppingCarts();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addShoppingCart = async (req, res) => {
    var data = req.body;
    if (ShoppingCartsValid(data)) {
        var newShoppingCart = await ShoppingCartsModel.addShoppingCart(data);
        res.json(newShoppingCart);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllShoppingCarts,
    getShoppingCartByID,
    getShoppingCartByUserID,
    updateShoppingCartByID,
    deleteShoppingCartByID,
    addShoppingCart
}