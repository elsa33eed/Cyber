const express = require("express");
const router = new express.Router()
const AccessoriesController = require("../Controllers/Accessories")

//Get All Accessories
router.get('/', AccessoriesController.getAllAccessories)
//Get Accessory By ID
router.get('/:id', AccessoriesController.getAccessoryByID)
//Get Accessories By Category
router.get('/Category/:categoryId', AccessoriesController.getAccessoriesByCategory)
//Update Accessory By ID
router.put('/:id', AccessoriesController.updateAccessoryByID)
//Delete Accessory By ID
router.delete('/:id', AccessoriesController.deleteAccessoryByID)
//Add New Accessory
router.post('/', AccessoriesController.addAccessory)

module.exports = router;