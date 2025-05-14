const mongose = require('mongoose');

const userSchema = new mongose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, default: null },
    role: { type: String, default: 'customer' },
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
});


module.exports = mongose.model('users', userSchema);