const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const ShoppingCartController = require("../Controllers/ShoppingCarts")

//Get All ShoppingCart
router.get('/', adminAcces, ShoppingCartController.getAllShoppingCarts)
//Get ShoppingCart By ID
router.get('/:id', ShoppingCartController.getShoppingCartByID)
//Get ShoppingCart By UserID
router.get('/User/:UserId', ShoppingCartController.getShoppingCartByUserID)
//Update ShoppingCart By ID
router.put('/:id', ShoppingCartController.updateShoppingCartByID)
//Delete ShoppingCart By ID
router.delete('/:id',  ShoppingCartController.deleteShoppingCartByID)
//Add New ShoppingCart
router.post('/', ShoppingCartController.addShoppingCart)
 
module.exports = router;