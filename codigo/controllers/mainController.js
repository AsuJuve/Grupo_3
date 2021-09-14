const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));
const db = require("../database/models");

module.exports={
    home: (req,res)=>{
        db.Product.findAll({raw:true}).then((courses)=>{
            res.status(200).render('home',{title: 'Inicio',courses})
        })
    },
    showCart: (req,res) => {
        //TO-DO
        res.render('products/productCart',{title:"Carrito"});
    },
    showDetail: async function (req,res){
        const id= req.params.id;
        const courses = await db.Product.findAll({raw:true});
        const curso = await db.Product.findByPk(parseInt(id),{raw:true});
        const requirements = await db.Requirement.findAll({
            where:{
                product_id:id
            }
        })
        res.render('products/productDetail',{title: 'Detalle de producto',courses,curso,requirements})
    }
}
