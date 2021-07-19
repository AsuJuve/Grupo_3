const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')


router.get('/', productsController.index);
router.post("/",productsController.store)

router.get('/create', productsController.create);

router.get("/:id", productsController.showDetail)
router.put("/:id", productsController.edited)
router.delete("/:id", productsController.delete)

router.get("/:id/editCourse", productsController.edit)


module.exports= router;