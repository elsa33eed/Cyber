const express = require("express");
const router = new express.Router()
const LaptopController = require("../Controllers/Laptops")

//Get All Laptops
router.get('/', LaptopController.getAllLaptops)
//Get Laptop By ID
router.get('/:id', LaptopController.getLaptopByID)
//Update Laptop By ID
router.put('/:id', LaptopController.updateLaptopByID)
//Delete Laptop By ID
router.delete('/:id', LaptopController.deleteLaptopByID)
//Add New Laptop
router.post('/', LaptopController.addLaptop)

module.exports = router;