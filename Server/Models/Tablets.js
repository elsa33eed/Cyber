const mongoose = require('mongoose');
const Product = require('./Products');

const TabletSchema = new mongoose.Schema({
    RamMemoryInstalled: { type: String },
    OperatingSystem: { type: String },
    ScreenSize: { type: String },
    MemoryStorageCapacity: { type: String },
    CameraQuality: { type: String }, 
    Color: { type: [String], required: true }
});

const Tablet = Product.discriminator('Tablet', TabletSchema);
module.exports = Tablet;
