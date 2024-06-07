const mongoose = require('mongoose');
const Product = require('./Products');

const HeadPhoneSchema = new mongoose.Schema({
    HeadphonesFormFactor: { type: String },
    NoiseControl: { type: String },
    Sensitivity: { type: String },
    HeadphonesJack: { type: String },
    ConnectivityTechnology: { type: String }, 
    WirelessCommunicationTechnology: { type: String }, 
});

const HeadPhone = Product.discriminator('HeadPhone', HeadPhoneSchema);
module.exports = HeadPhone;
