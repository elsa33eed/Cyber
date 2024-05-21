const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const AddressController = require("../Controllers/UsersAddresses")

//Get All Address
router.get('/', adminAcces, AddressController.getAllAddresses)
//Get Address By ID
router.get('/:id', AddressController.getAddressByID)
//Get Address By UserID
router.get('/User/:UserId', AddressController.getAddressByUserID)
//Update Address By ID
router.put('/:id', AddressController.updateAddressByID)
//Delete Address By ID
router.delete('/:id', AddressController.deleteAddressByID)
//Add New Address
router.post('/', AddressController.addAddress)

module.exports = router;