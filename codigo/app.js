const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 80;
const breadcrumbs = require("./data/categories.js")
app.set("view engine","ejs");

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(PORT,function(){
    console.log("Servidor listo, corriendo en puerto 80");
});

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.get("/editCourse",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/formProducts.ejs"),{title:"Editar Curso",categories:breadcrumbs})
});
app.get("/createCourse",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/formProducts.ejs"),{title:"Crear Curso"})
});
app.get("/productCart",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/productCart.ejs"),{title:"Carrito de compras"});
});
app.get("/register",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/register.ejs"),{title:"Registro"});
});
app.get("/login",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/login.ejs"),{title:"Inicia Sesión"});
});
app.get("/",(req,res) => {
    res.render(path.resolve(__dirname,"./views/home.ejs"),{title:"Inicio"});
});

app.get("/productDetail",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/productDetail.ejs"),{title:"Detalle de producto"});
});
