const mongoose = require('../../../mongoose/moongose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    rut: String,
    phone: String,
    password: String,
    role: String,
    created_at: String,
    updated_at: String
});

module.exports = mongoose.model('user', userSchema);