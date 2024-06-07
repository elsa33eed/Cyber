const mongoose = require('mongoose');
const Product = require('./Products');

const AccessorySchema = new mongoose.Schema({
    CompatibleDevices: { type: String }, 
    Material: { type: String }
});

const Accessory = Product.discriminator('Accessory', AccessorySchema);
module.exports = Accessory;