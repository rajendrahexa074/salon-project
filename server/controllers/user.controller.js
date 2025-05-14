const userService = require('../services/user.service.js');

exports.addUser = async (req, res) => {
    try {
        const result = await userService.createUser(req.body);

        if (!result.success) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(201).json({ message: 'User created successfully', user: result.user });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
};
exports.getAllUsers =async (req, res) => { 
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password);

        if (!result.success) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(200).json({ message: 'Login successful', user: result.user });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error: ' + error.message });
    }
};