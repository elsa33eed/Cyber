const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const DiscountController = require("../Controllers/Discounts")

//Get All Discount
router.get('/', DiscountController.getAllDiscounts)
//Get Discount By ID
router.get('/:id', DiscountController.getDiscountByID)
//Update Discount By ID
router.put('/:id', adminAcces, DiscountController.updateDiscountByID)
//Delete Discount By ID
router.delete('/:id', adminAcces, DiscountController.deleteDiscountByID)
//Add New Discount
router.post('/', adminAcces, DiscountController.addDiscount)

module.exports = router;