const express= require('express');
const userController = require('../controllers/userController');
const router= express.Router();

//Middlewares

//Formulario de registro
router.get("/register",userController.register);

//Formulario de login
router.get("/login",userController.login);

//Procesar login
router.post("/login",userController.loginProcess);

module.exports= router;