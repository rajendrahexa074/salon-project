const userService = require('../services/user.service.js');

exports.addUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}
exports.getAllUsers =async (req, res) => { 
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.login =async (req, res) => { 
    try {
        const users = await userService.login(req.body.email, req.body.password);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}