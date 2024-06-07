const mongoose = require('mongoose');
const Product = require('./Products');

const TabletSchema = new mongoose.Schema({
    RAMMemoryInstalled: { type: String },
    OperatingSystem: { type: String },
    ScreenSize: { type: String },
    MemoryStorageCapacity: { type: String },
    CameraQuality: { type: String }, 
});

const Tablet = Product.discriminator('Tablet', TabletSchema);
module.exports = Tablet;
