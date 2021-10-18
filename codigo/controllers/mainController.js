const fs= require('fs');
const path= require('path')
const db = require("../database/models");

module.exports={
    home: async function(req,res){
        let userLogged = null;
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
        const courses = await db.Product.findAll({raw:true});
        const cartProducts = [];
        let cart;
        if(userLogged==null){
            res.redirect("users/login");
        }else{
            cart = await db.Shopping_cart.findOne({
                raw:true,
                where:{
                    customer_id:userLogged.customer_id
                }
            })
            if(cart.amount!=0){
                const products = await db.Shopping_cart_products.findAll({
                    raw:true,
                    where:{
                        shopping_cart_id:cart.shopping_cart_id
                    }
                })
                for(let prod of products){
                    const productInCart = await db.Product.findByPk(parseInt(prod.product_id),{raw:true});
                    cartProducts.push(productInCart);
                }   
            }
            res.render('products/productCart',{title:"Carrito",userLogged,courses,cartProducts,total:cart.amount});
        }
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
    },
    addToCart: async function(req,res){
        const id= parseInt(req.params.id);
        const product = await db.Product.findByPk(parseInt(id),{raw:true});
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }})
            const cart = await db.Shopping_cart.findOne({
                raw:true,
                where:{
                    customer_id:customer.customer_id
                }
            })
            const checkProductInCart = await db.Shopping_cart_products.findOne({raw:true,where:{
                product_id:product.product_id,
                shopping_cart_id:cart.shopping_cart_id
            }})
            
            if(checkProductInCart==null){
                const finalAmount = cart.amount += product.product_price;
                const cartProduct = await db.Shopping_cart_products.create({
                    shopping_cart_id: cart.shopping_cart_id,
                    product_id: id
                })
                const updatedCart = await db.Shopping_cart.update({
                    customer_id:customer.customer_id,
                    amount:finalAmount
                },{where:{
                    customer_id:customer.customer_id
                }})
            }
            res.redirect("/");
        }else{
            res.redirect("/users/login");
        }
    },
    deleteFromCart: async function(req,res){
        const data = req.body;
        let quantity;
        const customer = await db.Customer.findOne({raw:true,where:{
            customer_email:req.session.userLogged
        }})
        const oldCart = await db.Shopping_cart.findOne({
            raw:true,
            where:{
                customer_id:customer.customer_id
            }
        })
        data.courseId = parseInt(data.courseId);
        const deletedCourse = await db.Shopping_cart_products.destroy({
            where: {
               product_id: data.courseId,
               shopping_cart_id:oldCart.shopping_cart_id
            }
         });
        quantity = oldCart.amount += deletedCourse.product_price;
        const cart = await db.Shopping_cart.update({
            customer_id:customer.customer_id,
            amount:quantity
        },{where:{
            customer_id:customer.customer_id
        }})
        res.redirect("/productCart");
    }
}
