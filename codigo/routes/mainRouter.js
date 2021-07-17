const express= require('express');
const router= express.Router();
const mainController= require('../controllers/mainController')

router.get("/", mainController.home);
router.get("/:id", mainController.cursoid);


router.get("/productCart",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/productCart.ejs"),{title:"Carrito de compras"});
});
router.get("/register",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/register.ejs"),{title:"Registro"});
});
router.get("/login",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/login.ejs"),{title:"Inicia Sesión"});
});

module.exports= router;