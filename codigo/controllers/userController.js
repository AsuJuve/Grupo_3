const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const usersFilePath = path.join(__dirname,"../data/users.json")
const {validationResult} = require('express-validator');
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));
const usersTxt= JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

const bcrypt = require("bcryptjs");
const bcryptjs = require('bcryptjs');
const controller = {
    register: (req, res) => {
        return res.render("users/register",{title:"Registro"});
    },
    registerProcess: (req,res)=>{
        //TO DO: validar que es un correo electronico :D
        console.log(req.file.filename)
        let newid = usersTxt.length+1;
        let data = req.body;
        let newUser = {
            id:newid,
            nombre:data.nombre,
            apellido:data.apellido,
            correo:data.correo,
            password:bcrypt.hashSync(data.password,10),
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

        //TO DO: COMPARE SYNC A LA CONTRASEÑA PARA REVISAR QUE SÍ ESTÁ BIEN :D
        if(req.body.recordarme != undefined){
            res.cookie('recordarme', req.body.correo, {maxAge: (1000*60)*2 });
        }
        
        const result = validationResult(req);

        if(result.errors.length > 0){
            return res.render("users/login",{
                title: "Inicia Sesión",
                errors: result.mapped(),
                oldData: req.body
            });
        }

        //TODO: Modelo de User
        let userToLoging = User.findByField('email', req.body.email);

        if(userToLogin){
            let passwordOk = bcryptjs.compareSync(req.body.password, userToLoging);
            if(passwordOk){
                delete userToLoging.password;
                req.session.userLogged = userToLogin;
                return res.redirect('home')
            }else{
                return res.render('login', {
                    noPassword: {
                        noUser: {
                            msg:'Credenciales invalidas'
                        }
                    }
                })
            }
        }else{
            return res.render('login', {
                errors: {
                    noUser: {
                        msg:'NO se encuentra el email en nuestra base de datos'
                    }
                }
            })
        }

        return res.render('home',{title: 'Inicio','courses':coursestxt});
    },
    profile: (req,res) => {
        return res.render('users/profile',{title: 'Crear Curso', 'users':usersTxt});
    }
}

module.exports = controller;