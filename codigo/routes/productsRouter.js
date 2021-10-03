const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')
const {body} = require('express-validator');

const validateProduct = [
    body("product_name").notEmpty().withMessage("El nombre del producto es obligatorio").bail()
        .isLength({min:5}).withMessage("El nombre del producto debe tener minimo 5 caracteres"),
    body("short_description").notEmpty().withMessage("La descripcion corta es obligatoria").bail()
    .isLength({min:20}).withMessage("El apellido debe tener minimo 20 caracteres")
];

router.get('/', productsController.index);

router.get('/create', productsController.create);
router.post('/create',validateProduct,productsController.store);

router.get("/:id", productsController.showDetail)
router.put("/:id", validateProduct,productsController.edited)

router.post("/:id", productsController.edited)

router.delete("/:id", productsController.delete)

router.get("/:id/editCourse", productsController.edit)


module.exports= router;