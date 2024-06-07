const ProductsValid = require("../Utils/ProductsValid")
const ProductsModel = require("../Models/AllProduct");
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");

const getAllProducts = async (req, res) => {
    const { productType } = req.query;
    try {
        const Products = await ProductsModel.getAllProducts(productType);
        if(Products.length === 0){
            return res.status(404).json({ message: 'Invalid Product Type' });
        }
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getProductsByCategory = async (req, res) => {
    const { productType } = req.query;
    const { categoryId } = req.params
    try {
        const Products = await ProductsModel.getProductsByCategory(categoryId, productType);
        if (!Products) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getProductByID = async (req, res) => {
    const { productType } = req.query;
    const { id } = req.params
    try {
        var foundedProduct = await ProductsModel.getProduct(id, productType);
        if (!foundedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(foundedProduct);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateProductByID = async (req, res) => {
    const { id } = req.params
    const { productType, ...data } = req.body;
    try {
        var updatedProduct = await ProductsModel.updateProduct(id, productType, data)
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct)
        // if (ProductsValid(data)) {
          
        // } else {
        //     res.status(400).json({ message: "Validation Error" });
        // }

    } catch (error) {
        res.status(400).send(error);
    }

}

const deleteProductByID = async (req, res) => {
    var { id } = req.params
    try {
        const product = await ProductsModel.deleteProduct(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        var data = await ProductsModel.getAllProducts();
        res.status(200).json({ message: 'Product deleted successfully', Data: data });
    } catch (error) {
        res.status(500).send(error);
    }
}

const addProduct = async (req, res) => {
    const { productType, ...data } = req.body;
    try{ 
        // if (ProductsValid(data)) {
            var newProduct = await ProductsModel.addProduct(productType, data);
            res.status(201).json(newProduct);
        // } else {
            // res.status(400).send(error);
            // res.status(400).json({ message: "Validation Error" });
        // }
    } catch (error) {
        res.status(400).send(error);
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