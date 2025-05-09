const mongose = require('mongoose');

const userSchema = new mongose.Schema({
    name: String,
    email: String,
    password: String
});


module.exports = mongose.model('users', userSchema);