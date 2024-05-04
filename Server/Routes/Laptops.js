const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const LaptopController = require("../Controllers/Laptops")

//Get All Laptops
router.get('/', LaptopController.getAllLaptops)
//Get Laptop By ID
router.get('/:id', LaptopController.getLaptopByID)
//Update Laptop By ID
router.put('/:id', adminAcces, LaptopController.updateLaptopByID)
//Delete Laptop By ID
router.delete('/:id', adminAcces, LaptopController.deleteLaptopByID)
//Add New Laptop
router.post('/', adminAcces, LaptopController.addLaptop)

module.exports = router;