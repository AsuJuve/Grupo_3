const bcrypt = require("bcryptjs");
const db = require("../database/models")
const {validationResult,body} = require("express-validator");

const controller = {
    register: async function(req, res){
        let userLogged = null;
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        return res.render("users/register",{title:"Registro",userLogged});
    },
    registerProcess: async function(req,res){
        const errores = validationResult(req);
        let userLogged = null;
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        }
        if (errores.isEmpty()) {
          const data = req.body;
          const newUser = {
            customer_firstname: data.customer_firstname,
            customer_lastname: data.customer_lastname,
            customer_email: data.customer_email,
            customer_password: bcrypt.hashSync(data.customer_password, 10),
            customer_type:
              data.customer_firstname == "admin" &&
              data.customer_lastname == "admin"
                ? "admin"
                : "estudiante",
            customer_image: data.img,
          };
          const createdUser = await db.Customer.create(newUser);
          return res.redirect("/users/login");
        }else{
          return res.render("users/register",{"errores": errores.array(),title:"Registro",userLogged});
        }
    },
    login: async function(req, res){
        req.session.userLogged = null;
        return res.render("users/login",{title:"Inicia Sesión",userLogged:null});
    },
    loginProcess: async function(req,res){
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render("users/login",{
                title: "Inicia Sesión",
                errors: result.mapped(),
                oldData: req.body,userLogged:null
            });
        }
        let userToLogin = await db.Customer.findAll({
            where:{
                "customer_email":req.body.customer_email
            },
            raw:true
        });
        if(userToLogin.length!=0){
            userToLogin = userToLogin[0];
            let passwordOk = await bcrypt.compare(req.body.customer_password, userToLogin.customer_password);
            if(passwordOk){
                req.session.userLogged = req.body.customer_email;
                if(req.body.recordarme != undefined){
                    res.cookie('recordarme', req.body.customer_email, {maxAge: (1000*60)*2 });
                }
                delete userToLogin.customer_password;
                res.redirect('/');
            }else{
                return res.render("users/login", {
                    noPassword: {
                        noUser: {
                            msg:'Credenciales invalidas'
                        }
                    },
                    title: "Inicia Sesión",
                    userLogged:null
                })
            }
        }
        else{
            return res.render("users/login", {
                noPassword: {
                    noUser: {
                        msg:'Credenciales invalidas'
                    }
                },
                title: "Inicia Sesión",
                userLogged:null
            })
        }
    },
    profile: async function(req,res){
        let userLogged = null;
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
            
        return res.render('users/profile',
            {title: 'Crear Curso',
            userLogged});
        }else{
            res.redirect("/")
        }
    },
    editProfile: async function(req,res){
        let userLogged = null;
        if(req.session.userLogged){
            const customer = await db.Customer.findOne({raw:true,where:{
                customer_email:req.session.userLogged
            }});
            userLogged = customer;
        return res.render('users/editProfile',
            {title: 'Crear Curso',
            userLogged});
        }else{
            res.redirect("/")
        }
    },
    editProcess: async function(req,res){
        const data = req.body;
        const oldUser = await db.Customer.findOne({raw:true,where:{
            "customer_email":req.session.userLogged
        }});
        const userData= {
            "customer_firstname":data.customer_firstname,
            "customer_lastname":data.customer_lastname,
            "customer_email":oldUser.customer_email,
            "customer_password":bcrypt.hashSync(data.customer_password,10),
            "customer_type":oldUser.customer_type,
            "customer_image":data.img
        }
        const updatedUser = await db.Customer.update(userData,{where:{"customer_id":oldUser.customer_id}}) 
        res.redirect("/users/profile");
    }
}

module.exports = controller;
