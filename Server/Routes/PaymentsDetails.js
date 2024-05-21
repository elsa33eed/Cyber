const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const PaymentDetailsController = require("../Controllers/PaymentsDetails")

//Get All Payment Details
router.get('/', adminAcces, PaymentDetailsController.getAllPaymentsDetails)
//Get Payment Details By ID
router.get('/:id', PaymentDetailsController.getPaymentDetailstByID)
//Get Payment Details By OrderID
router.get('/Order/:OrderID', PaymentDetailsController.getPaymentsDetailsByOrderID)
//Update Payment Details By ID
router.put('/:id', adminAcces, PaymentDetailsController.updatePaymentDetailsByID)
//Delete Payment Details By ID
router.delete('/:id', adminAcces,  PaymentDetailsController.deletePaymentDetailsByID)
//Delete Payment Details By OrderID
router.delete('/Order/:OrderID', PaymentDetailsController.deletePaymentDetailstByOrderID)
//Add New Payment Details
router.post('/', PaymentDetailsController.addPaymentDetails)
 
module.exports = router;