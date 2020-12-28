const mongoose = require('../../moongose');

const reservationSchema = new mongoose.Schema({
    clientId: {},
    movies: [],
    date: String,
    subtotal: Number,
    status: [],
    deliveryDate: String,
    created_at: String,
    updated_at: String
});

module.exports = mongoose.model('reservation', reservationSchema);