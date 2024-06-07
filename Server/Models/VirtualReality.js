const mongoose = require('mongoose');
const Product = require('./Products');

const VirtualRealitySchema = new mongoose.Schema({
    CompatibleDevices: { type: String },
    Platform: { type: String }
});

const VirtualReality = Product.discriminator('VirtualReality', VirtualRealitySchema);
module.exports = VirtualReality;
