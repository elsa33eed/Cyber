const mongoose = require('mongoose');
const Product = require('./Products');

const SmartWatchSchema = new mongoose.Schema({
    OperatingSystem: { type: String },
    ItemShape: { type: String },
    BatteryCapacity: { type: String },
    ConnectivityTechnology: { type: String },
    ScreenSize: { type: String }, 
    Color: { type: [String], required: true }
});

const SmartWatch = Product.discriminator('SmartWatch', SmartWatchSchema);
module.exports = SmartWatch;
