const mongoose = require('../../../mongoose/moongose');

const movieSchema = new mongoose.Schema({
    title: String,
    generalDescription: String,
    actorList: [],
    directors: [],
    price: Number,
    quantity: Number
});

module.exports = mongoose.model('movie', movieSchema);