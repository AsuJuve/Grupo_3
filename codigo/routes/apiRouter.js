const express= require('express');
const router= express.Router();
const apiUsersController= require('../controllers/apiUsersController')
const apiProductsController= require('../controllers/apiProductsController')
const {body} = require('express-validator');

router.get('/users', apiUsersController.index);
router.get('/users/:id', apiUsersController.detail);

router.get('/products', apiProductsController.index);
router.get('/products/:id', apiProductsController.detail);


module.exports= router;