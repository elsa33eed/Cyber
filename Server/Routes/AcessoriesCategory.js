const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const CategoryController = require("../Controllers/AcessoriesCategory")

//Get All Category
router.get('/', CategoryController.getAllCategories)
//Get Category By ID
router.get('/:id', CategoryController.getCategoryByID)
//Update Category By ID
router.put('/:id', adminAcces, CategoryController.updateCategoryByID)
//Delete Category By ID
router.delete('/:id', adminAcces, CategoryController.deleteCategoryByID)
//Add New Category
router.post('/', adminAcces, CategoryController.addCategory)

module.exports = router;