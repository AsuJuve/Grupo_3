const express= require('express');
const router= express.Router();
const mainController= require('../controllers/mainController')

router.get("/", mainController.home);
router.get("/productDetail/:id", mainController.showDetail)
router.get("/productCart",mainController.showCart);

router.get("/register",(req,res) => {
    res.render("users/register",{title:"Registro"});
});
router.get("/login",(req,res) => {
    res.render("users/login",{title:"Inicia Sesión"});
});

module.exports= router;