const ProductsValid = require("../Utils/ProductsValid")
const ProductsModel = require("../Models/Products")

const getAllProducts = async (req, res) => {
    const Products = await ProductsModel.getAllProducts();
    res.json(Products);
}

const getProductsByCategory = async(req,res) => {
    Category =req.params.categoryId
    const Products = await ProductsModel.getProductsByCategory(Category);
    res.json(Products);
}

const getProductByID = async (req, res) => {
    var ID = req.params.id;
    var foundedProduct = await ProductsModel.getProduct(ID);
    res.json(foundedProduct);
}

const updateProductByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (ProductsValid(data)) {
        var updatedProduct = await ProductsModel.updateProduct(ID, data)
        res.json(updatedProduct)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteProductByID = async (req, res) => {
    var ID = req.params.id
    await ProductsModel.deleteProduct(ID)
    var data = await ProductsModel.getAllProducts();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addProduct = async (req, res) => {
    var data = req.body;
    if (ProductsValid(data)) {
        var newProduct = await ProductsModel.addProduct(data);
        res.json(newProduct);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProductByID,
    updateProductByID,
    deleteProductByID,
    addProduct
}