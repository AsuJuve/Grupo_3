const fs= require('fs');
const path= require('path')
const db = require("../database/models");

module.exports={
    home: async function(req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const courses = await db.Product.findAll({raw:true});
        res.status(200).render('home',{title: 'Inicio',courses,userLogged})
    },
    showCart: async function(req,res){
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        res.render('products/productCart',{title:"Carrito",userLogged});
    },
    showDetail: async function (req,res){
        const id= req.params.id;
        let userLogged = null
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        const courses = await db.Product.findAll({raw:true});
        const curso = await db.Product.findByPk(parseInt(id),{raw:true});
        const requirements = await db.Requirement.findAll({
            where:{
                product_id:id
            }
        })
        res.render('products/productDetail',{title: 'Detalle de producto',courses,curso,requirements,userLogged})
    }
}
