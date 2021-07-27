const express= require('express');
const userController = require('../controllers/userController');
const router= express.Router();

//Express validator
const {body} = require('express-validator');

const validationsLogin = [
    body('contraseña')
        .notEmpty().withMessage('La contraseña es necesaria para iniciar sesión').bail(),
    body('correo').notEmpty().withMessage('El correo electrónico es necesario para el inicio de sesión').bail()
        .isEmail().withMessage('Formato de correo electrónico no válido')
];

//Middlewares

//Formulario de registro
router.get("/register",userController.register);

//Formulario de login
router.get("/login",userController.login);

//Procesar login
router.post("/login",validationsLogin,userController.loginProcess);

module.exports= router;