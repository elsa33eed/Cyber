const mongoose = require('mongoose');
const Product = require('./Products');

const PlayStationSchema = new mongoose.Schema({
    HardDiskCapacity: { type: String }
});

const PlayStation = Product.discriminator('PlayStation', PlayStationSchema);
module.exports = PlayStation;
