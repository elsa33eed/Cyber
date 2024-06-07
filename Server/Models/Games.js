const mongoose = require('mongoose');
const Product = require('./Products');

const GameSchema = new mongoose.Schema({
    RealaseYear: { type: Number }
});

const Game = Product.discriminator('Game', GameSchema);
module.exports = Game;
