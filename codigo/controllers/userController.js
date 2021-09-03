const fs= require('fs');
const path= require('path')
const User = require('../models/User')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const usersFilePath = path.join(__dirname,"../data/users.json")
const {validationResult} = require('express-validator');
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));
const usersTxt= JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

const bcrypt = require("bcryptjs");
const controller = {
    register: (req, res) => {
        return res.render("users/register",{title:"Registro"});
    },
    registerProcess: (req,res)=>{
        const newid = usersTxt.length+1;
        const data = req.body;
        const newUser = {
            id:newid,
            nombre:data.nombre,
            apellido:data.apellido,
            correo:data.correo,
            password: bcrypt.hashSync(data.password,10),
            tipo:"estudiante",
            imagen:"/images/users/"+req.file.filename
        }
        usersTxt.push(newUser);
        fs.writeFileSync(usersFilePath,JSON.stringify(usersTxt))
        return res.redirect("/users/login");
    },
    login: (req, res) => {
        return res.render("users/login",{title:"Inicia Sesión"});
    },
    loginProcess: (req,res) => {
        
        const result = validationResult(req);
        if(result.errors.length > 0){
            return res.render("users/login",{
                title: "Inicia Sesión",
                errors: result.mapped(),
                oldData: req.body
            });
        }
        let userToLogin = usersTxt.filter((e)=> e.correo ==req.body.correo)[0];
        if(userToLogin){
            let passwordOk = bcrypt.compareSync(req.body.contra, userToLogin.password);
            if(passwordOk){
                if(req.body.recordarme != undefined){
                    res.cookie('recordarme', req.body.correo, {maxAge: (1000*60)*2 });
                }
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/')
            }else{
                return res.render("users/login", {
                    noPassword: {
                        noUser: {
                            msg:'Credenciales invalidas'
                        }
                    },
                    title: "Inicia Sesión"
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
                title: "Inicia Sesión"
            })
        }
    },
    profile: (req,res) => {
        return res.render('users/profile',
            {title: 'Crear Curso',
            'users':usersTxt,
            user: req.session.userLogged});
    }
}

module.exports = controller;
