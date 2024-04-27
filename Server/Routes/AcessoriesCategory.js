const express = require("express");
const router = new express.Router()
const CategoryController = require("../Controllers/AcessoriesCategory")

//Get All Category
router.get('/', CategoryController.getAllCategories)
//Get Category By ID
router.get('/:id', CategoryController.getCategoryByID)
//Update Category By ID
router.put('/:id', CategoryController.updateCategoryByID)
//Delete Category By ID
router.delete('/:id', CategoryController.deleteCategoryByID)
//Add New Category
router.post('/', CategoryController.addCategory)

module.exports = router;