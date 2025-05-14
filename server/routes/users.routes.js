const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

//auth services
router.post('/add-user', userController.addUser);
router.get('/get-users', userController.getAllUsers);
router.post('/login', userController.login);




module.exports = router;