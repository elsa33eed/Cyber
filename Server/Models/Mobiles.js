const mongoose = require('mongoose');
const Product = require('./Products');

const MobileSchema = new mongoose.Schema({
    ScreenSize: { type: String },
    Storage: { type: String },
    BatterySize: { type: String },
    CameraQuality: { type: String },
    OS: { type: String }, 
    Ram: { type: String }, 
    Weight: { type: String }, 
});

const Mobile = Product.discriminator('Mobile', MobileSchema);
module.exports = Mobile;
