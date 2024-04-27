const express = require("express");
const router = new express.Router()
const UserController = require("../Controllers/Users")

//Get All Users
router.get('/', UserController.getAllUsers)
//Get User By ID
router.get('/:id', UserController.getUserByID)
//Update User By ID
router.put('/:id', UserController.updateUserByID)
//Delete User By ID
router.delete('/:id', UserController.deleteUserByID)
//Register
router.post('/Registeration', UserController.Registration)
//Login
router.post('/Login', UserController.Login)

module.exports = router;