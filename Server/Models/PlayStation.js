const mongoose = require('mongoose');
const Product = require('./Products');

const PlayStationSchema = new mongoose.Schema({
    HardDiskCapacity: { type: String },
    Color: { type: [String], required: true }
});

const PlayStation = Product.discriminator('PlayStation', PlayStationSchema);
module.exports = PlayStation;
