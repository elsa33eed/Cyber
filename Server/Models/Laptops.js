const mongoose = require('mongoose');
const Product = require('./Products');

const LaptopSchema = new mongoose.Schema({
    "Processor": { type: String },
    "Hard": { type: String },
    "GraphicCard": {type:String},
    "Screen": { type: String },
    "Ram": { type: String },
    "Color": { type: [String], required: true }
});

const Laptop = Product.discriminator('Laptop', LaptopSchema);
module.exports = Laptop;
