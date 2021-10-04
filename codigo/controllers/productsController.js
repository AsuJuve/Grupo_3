const { showDetail } = require('./mainController');
const db = require("../database/models")

module.exports={
    index: async function (req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const courses = await db.Product.findAll({raw:true});
        res.render('products/allProducts',{title: 'Todos los cursos',courses,userLogged})
    },
    create: async function (req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const courses = await db.Product.findAll({raw:true});
        res.render("products/createProducts",{title: 'Crear Curso',courses,userLogged})
    },
    edit: async function(req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const id = req.params.id;
        const courses = await db.Product.findAll({raw:true});
        const requirements = await db.Requirement.findAll({
            raw:true,
            nest: true,
            where:{
                product_id:id
            }
        })
        res.render('products/editProducts',{title: 'Editar Curso',courses,id,requirements,userLogged});
    },
    edited: async function(req,res){
        //can't be directly updated, we don't know if new requirements were added/deleted
        const id = parseInt(req.url.substring(1).split("?")[0]);
		const data = req.body;
        data["product_image"]= data["img"];
        let newRequirements = data.requirement_description;
        const deletedReq = await db.Requirement.destroy({
            where:{
                product_id:id
            }
        })
        delete data.requirement_description;
        delete data.img;
        const updatedCourse = await db.Product.update(data, {
            where: {
                product_id: id
            }
        })
        newRequirements = newRequirements.split(".").map((l)=>l+". ");
        // llega informacion rara al final.
        newRequirements.pop();
        newRequirements = newRequirements.map(function(value) {
            return {
                requirement_description: value,
                product_id:id
            };
        });
        //bulkcreate daba errores
        for (let i = 0; i < newRequirements.length; i++) {
            const newElement = await db.Requirement.create(newRequirements[i]);
        }
        res.redirect('/products');
    },
    store: async function(req,res){
		const data = req.body;
        let requirements = data.requirement_description.split(".").map((l)=>l+".");
        requirements.pop();
		const newCourse = {
			"product_name": data.product_name,
            "short_description":data.short_description,
            "long_description":data.long_description,
            "product_image":data.img,
			"product_price": data.product_price,
            "enrolled_students": 0,
            "category_id":2,
            "value_rating":0
		}
        const createdCourse = await db.Product.create(newCourse);
        requirements = requirements.map(function(value) {
            return {
                requirement_description: value,
                product_id:createdCourse.product_id
            };
        });
        for (let i = 0; i < requirements.length; i++) {
            const newElement = await db.Requirement.create(requirements[i]);
        }
        res.redirect('/products')
    },
    delete: async function(req,res){
        const id = parseInt(req.params.id);
        const deletedRequirements = await db.Requirement.destroy({
            where:{
                product_id:id
            }
        });
        const deletedCarProducts = await db.Shopping_cart_products.destroy({
            where:{
                product_id:id
            }
        });
        const deletedCourse = await db.Product.destroy({
            where:{
                product_id:id
            }
        })
        res.redirect('/products')
    },
    showDetail:async function(req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const id= req.params.id;
        const courses = await db.Product.findAll({raw:true});
        const requirements = await db.Requirement.findAll({
            where:{
                product_id:id
            }
        })
        res.render("products/productDetailAdmin",{title: 'Detalle de producto',courses,curso:parseInt(id),requirements,userLogged})
    }
}