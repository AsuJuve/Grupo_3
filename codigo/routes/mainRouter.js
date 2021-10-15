const express= require('express');
const router= express.Router();
const mainController= require('../controllers/mainController')

router.get("/", mainController.home);
router.get("/productDetail/:id", mainController.showDetail);
router.post("/productDetail/:id", mainController.addToCart);
router.get("/productCart",mainController.showCart);
router.post("/productCart",mainController.deleteFromCart);

module.exports= router;