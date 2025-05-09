const User = require('../models/users.model.js');

exports.createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error adding user: ' + error.message);
    }
}

exports.getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }


}

exports.login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        return user;
    } catch (error) {
        throw new Error('Error logging in: ' + error.message);
    }
}