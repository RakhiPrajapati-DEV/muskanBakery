const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginSchema = new mongoose.Schema({
    userName: String,
    email: { type: String, unique: true },
    password: String
});

loginSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('Login', loginSchema);
