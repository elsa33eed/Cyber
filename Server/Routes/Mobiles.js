const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const MobileController = require("../Controllers/Mobiles")

//Get All Mobiles
router.get('/', MobileController.getAllMobiles)
//Get Mobile By ID
router.get('/:id', MobileController.getMobileByID)
//Update Mobile By ID
router.put('/:id', adminAcces, MobileController.updateMobileByID)
//Delete Mobile By ID
router.delete('/:id', adminAcces, MobileController.deleteMobileByID)
//Add New Mobile
router.post('/', adminAcces, MobileController.addMobile)

module.exports = router;