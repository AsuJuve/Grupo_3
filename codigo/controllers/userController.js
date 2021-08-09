const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const usersFilePath = path.join(__dirname,"../data/users.json")
const {validationResult} = require('express-validator');
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));
const usersTxt= JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

const bcrypt = require("bcryptjs")
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
        const result = validationResult(req);

        if(result.errors.length > 0){
            return res.render("users/login",{
                title: "Inicia Sesión",
                errors: result.mapped(),
                oldData: req.body
            });
        }

        return res.render('home',{title: 'Inicio','courses':coursestxt});
    }
}

module.exports = controller;