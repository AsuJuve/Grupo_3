const express= require('express');
const router= express.Router();
const productsController= require('../controllers/productsController')


router.get('/', productsController.index);

router.get('/createCourse', productsController.create);
router.post("/",productsController.store)

router.get("/:id", productsController.detail)
router.put("/:id", productsController.edited)
router.delete("/:id", productsController.delete)

router.get("/:id/editCourse", productsController.edit)



module.exports= router;