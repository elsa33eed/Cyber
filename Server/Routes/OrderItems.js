const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const OrderItemController = require("../Controllers/OrderItems")

//Get All OrderItem
router.get('/', adminAcces, OrderItemController.getAllOrderItems)
//Get OrderItem By ID
router.get('/:id', OrderItemController.getOrderItemByID)
//Get OrderItem By OrderId
router.get('/Order/:OrderId', OrderItemController.getOrderItemsByOrderID)
//Update OrderItem By ID
router.put('/:id', OrderItemController.updateOrderItemByID)
//Delete OrderItem By ID
router.delete('/:id',  OrderItemController.deleteOrderItemByID)
//Delete OrderItem By OrderId
router.delete('/Order/:OrderId', adminAcces, OrderItemController.deleteOrderItemsByOrderID)
//Add New OrderItem
router.post('/', OrderItemController.addOrderItem)
 
module.exports = router;