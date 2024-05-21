const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const PaymentController = require("../Controllers/UsersPayments")

//Get All Payment
router.get('/', adminAcces, PaymentController.getAllPayments)
//Get Payment By ID
router.get('/:id', PaymentController.getPaymentByID)
//Get Payment By UserID
router.get('/User/:UserId', PaymentController.getPaymentByUserID)
//Update Payment By ID
router.put('/:id', PaymentController.updatePaymentByID)
//Delete Payment By ID
router.delete('/:id', PaymentController.deletePaymentByID)
//Add New Payment
router.post('/', PaymentController.addPayment)

module.exports = router;