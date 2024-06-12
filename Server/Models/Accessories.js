const mongoose = require('mongoose');
const Product = require('./Products');

const AccessorySchema = new mongoose.Schema({
    CompatibleDevices: { type: String }, 
    Material: { type: String },
    Color: { type: [String], required: true }
});

const Accessory = Product.discriminator('Accessory', AccessorySchema);
module.exports = Accessory;