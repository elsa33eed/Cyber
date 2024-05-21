const mongoose = require('./db');

const ProductSchema = new mongoose.Schema({
    "_id": { type: Number },
    "BrandName": { type: String },
    "ModelName": { type: String },
    "Picture": { type: String },
    "CategoryId": { type: Number },
    "Color": { type: String },
    "DiscountId": { type: Number },
    "Description": { type: String },
    "Quantity": { type: Number },
    "Price":{type:Number}
});
const Product = mongoose.model("Products", ProductSchema);

const getAllProducts = async () => {
    const Products = await Product.find({})
    return Products;
}

const getProductsByCategory = async(ProductsCategory)=>{
    const foundedProducts = await Product.find({CategoryId:ProductsCategory})
    return foundedProducts;
}

const getProduct = async (id) => {
    const foundedProduct = await Product.find({_id:id})
    return foundedProduct;
}

const updateProduct = async (id, data)=>{
    var updatedProduct = await Product.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedProduct;
}

const deleteProduct = async (id)=>{
    await Product.findByIdAndDelete(id)
}

const addProduct = async (data)=>{
    var maxIdProduct = await Product.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdProduct ? maxIdProduct._id : 0;
    data._id = maxId+1;
    var newProduct = await new Product(data);
    await newProduct.save();
    return newProduct  
}
module.exports= {
    getAllProducts,
    getProductsByCategory,
    getProduct,
    updateProduct,
    deleteProduct,
    addProduct
}