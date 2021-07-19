const fs= require('fs');
const path= require('path');
const { showDetail } = require('./mainController');
const coursesFilePath= path.join(__dirname, "../data/products.json")
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));

module.exports={
    index: (req,res)=>{
        res.render('products/allProducts',{title: 'Todos los cursos','courses':coursestxt})
    },
    create: (req,res)=>{
        res.render("products/createProducts",{title: 'Crear Curso'})
    },
    edit: (req,res)=>{
        res.render('products/editProducts',{title: 'Editar Curso','courses':coursestxt})
    },
    edited: (req,res)=>{
        res.render('products/productDetailAdmin', {title: 'Detalle de producto','courses':coursestxt})
    },
    store: (req,res)=>{
        let nuevo = coursestxt.length + 1;
		let data = req.body;
		let newCourse = {
			"id": nuevo,
			"name": data.nombreCurso,
            "categorization":data.curso,
            "shortDescription":data.descripcionCorta,
            "requirements":data.requisitos,
            "longDescription":data.descripcionLarga,
            "image":data.imagenDelCurso,
			"price": data.precio
		}
        fs.writeFileSync(coursesFilePath,JSON.stringify(coursestxt))
		coursestxt.push(newCourse);
		res.redirect('/')
    },
    delete: (req,res)=>{
        const index = coursestxt.findIndex(course => course.id == req.params.id);
        delete coursestxt[index];
        res.redirect('/')
    },
    showDetail:(req,res)=>{
        let id= req.params.id;
        res.render("products/productDetailAdmin",{title: 'Detalle de producto',courses:coursestxt,curso:parseInt(id)})
    }
}