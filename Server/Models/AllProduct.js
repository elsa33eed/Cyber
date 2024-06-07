const Product = require('./Products');
const Mobile = require('./Mobiles');
const Laptops = require('./Laptops');
const Cameras = require('./Cameras');
const HeadPhones = require('./HeadPhones');
const SmartWatches = require('./SmartWatches');
const VirtualReality = require('./VirtualReality');
const Tablets = require('./Tablets');
const Accessories = require('./Accessories');
const PlayStation = require('./PlayStation');
const Games = require('./Games');

const addProduct = async (productType, productData) => {
    let product;
    var maxIdProduct = await Product.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdProduct ? maxIdProduct._id : 0;
    productData._id = maxId + 1;
    switch (productType) {
        case 'Mobile':
            product = await new Mobile(productData);
            break;
        case 'Laptop':
            product = await new Laptops(productData);
            break;
        case 'Tablet':
            product = await new Tablets(productData);
            break;
        case 'Camera':
            product = await new Cameras(productData);
            break;
        case 'HeadPhone':
            product = await new HeadPhones(productData);
            break;
        case 'SmartWatch':
            product = await new SmartWatches(productData);
            break;
        case 'VirtualReality':
            product = await new VirtualReality(productData);
            break;
        case 'PlayStation':
            product = await new PlayStation(productData);
            break;
        case 'Game':
            product = await new Games(productData);
            break;
        case 'Accessories':
            product = await new Accessories(productData);
            break;
        default:
            return { message: "Please enter valid product type" }
    }
    await product.save();
    return product;
};

const getAllProducts = async (productType) => {
    let products;
    if (productType) {
        products = await Product.find({ productType });
    } else {
        products = await Product.find({});
    }
    return products;
}

const getProduct = async (id, productType) => {
    let product;
    if (productType) {
        product = await Product.findOne({ _id: id, productType });
    } else {
        product = await Product.findById(id);
    }
    return product;
}

const getProductsByCategory = async (ProductsCategory, productType) => {
    let product
    if (productType) {
        product = await Product.findOne({ CategoryId: ProductsCategory, productType })
    } else {
        product = await Product.findOne({ CategoryId: ProductsCategory });
    }
    return product;
}

const updateProduct = async (id, productType, data) => {
    let product;
    switch (productType) {
        case 'Mobile':
            product = await Mobile.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'Laptop':
            product = await Laptops.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'Tablet':
            product = await Tablets.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'Camera':
            product = await Cameras.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'HeadPhone':
            product = await HeadPhones.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'SmartWatch':
            product = await SmartWatches.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'VirtualReality':
            product = await VirtualReality.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'PlayStation':
            product = await PlayStation.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'Game':
            product = await Games.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        case 'Accessories':
            product = await Accessories.findByIdAndUpdate(id, data, { new: true, runValidators: true });
            break;
        default:
            return { message: "Please enter valid product type" }
    }
    return product;
}

const deleteProduct = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    return product
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProduct,
    updateProduct,
    deleteProduct,
    addProduct
}