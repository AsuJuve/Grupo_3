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
        res.render("products/createProducts",{title: 'Crear Curso','courses':coursestxt})
    },
    edit: (req,res)=>{
        let id = req.params.id;
        res.render('products/editProducts',{title: 'Editar Curso','courses':coursestxt,'id':id});
    },
    edited: (req,res)=>{
        let id = parseInt(req.url.substring(1).split("?")[0]);
		let data = req.body;
		let newCourse = {
			"name": data.nombreCurso,
            "shortDescription":data.descripcionCorta,
            "requirements":data.requisitos,
            "longDescription":data.descripcionLarga,
            "image":data.imagenDelCurso,
			"price": data.precio
		}
        let courseIndex = coursestxt.findIndex(l=>l["id"]==id)
        coursestxt[courseIndex] = {...newCourse}
        fs.writeFileSync(coursesFilePath,JSON.stringify(coursestxt));
        res.render('products/productDetailAdmin', {title: 'Detalle de producto','courses':coursestxt,curso:id})
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
		coursestxt.push(newCourse);
        fs.writeFileSync(coursesFilePath,JSON.stringify(coursestxt));
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