const User = require('../models/users.model.js');

exports.createUser = async (userData) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return { success: false, status: 409, message: 'User already exists' };
        }

        const user = new User(userData);
        await user.save();

        return { success: true, user };
    } catch (error) {
        return { success: false, status: 500, message: 'Error adding user: ' + error.message };
    }
};


exports.getUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }


}

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return { success: false, status: 404, message: 'User not found' };
    }

    if (user.password !== password) {
        return { success: false, status: 401, message: 'Invalid password' };
    }

    return { success: true, user };
};