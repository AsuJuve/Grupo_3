const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const {validationResult} = require('express-validator');
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));

const controller = {
    register: (req, res) => {
        return res.render("users/register",{title:"Registro"});
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

        return res.render('home',{title: 'Inicio','courses':coursestxt});
    }
}

module.exports = controller;