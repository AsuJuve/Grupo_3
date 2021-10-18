const express= require('express');
const userController = require('../controllers/userController');
const router= express.Router();
//Requerimientos para subir archivos
const multer = require("multer");
const path = require("path");
const db = require("../database/models")
const {check} = require("express-validator");
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
const upload = multer({ storage: storage });

//Express validator
const {body} = require('express-validator');

const validationsLogin = [
    body('customer_password')
        .notEmpty().withMessage('La contraseña es necesaria para iniciar sesión').bail(),
    body('customer_email').notEmpty().withMessage('El correo electrónico es necesario para el inicio de sesión').bail()
        .isEmail().withMessage('Formato de correo electrónico no válido')
];

const validateRegister = [
    body("customer_firstname").notEmpty().withMessage("El nombre es obligatorio").bail()
        .isLength({min:2}).withMessage("El nombre debe tener minimo 2 caracteres"),
    body("customer_lastname").notEmpty().withMessage("El apellido es obligatorio").bail()
    .isLength({min:2}).withMessage("El apellido debe tener minimo 2 caracteres"),
    body("customer_email").notEmpty().withMessage("El email es obligatorio").bail()
        .isEmail().withMessage("El email no es válido.").bail(),
    body("customer_password").notEmpty().withMessage("La contraseña es obligatoria").bail()
    .isLength({min:8}).withMessage("La contraseña debe tener minimo 8 caracteres").bail()
];

//Middlewares
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

//Formulario de registro
router.get("/register", guestMiddleware, userController.register);
router.post("/register",validateRegister,userController.registerProcess);

//Formulario de login
router.get("/login", guestMiddleware, userController.login);

//Procesar login
router.post("/login",validationsLogin,userController.loginProcess);

//Perfil
router.get("/profile", authMiddleware, userController.profile);

router.get("/editProfile",userController.editProfile);
router.put("/editProfile",userController.editProcess);

router.get("/logout", authMiddleware,userController.logout)

module.exports= router;