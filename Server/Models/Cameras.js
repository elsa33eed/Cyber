const mongoose = require('mongoose');
const Product = require('./Products');

const CameraSchema = new mongoose.Schema({
    PhotoSensorResolution: { type: String },
    MaximumFocalLength: { type: String },
    FileFormat: { type: String },
    ConnectivityTech: { type: String },
    FormFactor: { type: String },
    Color: { type: [String], required: true }
});

const Camera = Product.discriminator('Camera', CameraSchema);
module.exports = Camera;
