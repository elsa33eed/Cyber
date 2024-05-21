const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const OrderDetailsController = require("../Controllers/OrdersDetails")

//Get All OrderDetails
router.get('/', adminAcces, OrderDetailsController.getAllOrdersDetails)
//Get OrderDetails By ID
router.get('/:id', OrderDetailsController.getOrderDetailstByID)
//Get OrderDetails By UserID
router.get('/User/:UserId', OrderDetailsController.getOrdersDetailsByUserID)
//Update OrderDetails By ID
router.put('/:id', OrderDetailsController.updateOrderDetailsByID)
//Delete OrderDetails By ID
router.delete('/:id',  OrderDetailsController.deleteOrderDetailsByID)
//Add New OrderDetails
router.post('/', OrderDetailsController.addOrderDetails)
 
module.exports = router;