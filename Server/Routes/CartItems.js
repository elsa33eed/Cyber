const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const CartItemController = require("../Controllers/CartItems")

//Get All CartItem
router.get('/', adminAcces, CartItemController.getAllCartItems)
//Get CartItem By ID
router.get('/:id', CartItemController.getCartItemByID)
//Get CartItem By ShoppingCartId
router.get('/ShoppingCart/:ShoppingCartId', CartItemController.getCartItemsByShoppingCartID)
//Update CartItem By ID
router.put('/:id', CartItemController.updateCartItemByID)
//Delete CartItem By ID
router.delete('/:id',  CartItemController.deleteCartItemByID)
//Add New CartItem
router.post('/', CartItemController.addCartItem)
 
module.exports = router;