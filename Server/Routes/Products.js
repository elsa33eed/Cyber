const express = require("express");
const router = new express.Router()
const adminAcces  = require("../MiddleWare/usersMWPermission")
const ProductsController = require("../Controllers/Products")

//Get All Products
router.get('/', ProductsController.getAllProducts)
//Get Product By ID
router.get('/:id', ProductsController.getProductByID)
//Get Products By Category
router.get('/Category/:categoryId', ProductsController.getProductsByCategory)
//Update Product By ID
router.put('/:id', adminAcces, ProductsController.updateProductByID)
//Delete Product By ID
router.delete('/:id', adminAcces, ProductsController.deleteProductByID)
//Add New Product
router.post('/', adminAcces, ProductsController.addProduct)

module.exports = router;