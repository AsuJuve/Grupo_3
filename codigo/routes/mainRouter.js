const express= require('express');
const router= express.Router();
const mainController= require('../controllers/mainController')

router.get("/", mainController.home);
router.get("/productDetail/:id", mainController.showDetail)
router.get("/productCart",mainController.showCart);

module.exports= router;