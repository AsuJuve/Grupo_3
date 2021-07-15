const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.resolve(__dirname,"./public")));

const methodOverride= require('method-override')
app.use(methodOverride('_method'));

const productsRouter= require('./routes/productsRouter')
const mainRouter= require('./routes/mainRouter')

app.set("view engine","ejs");

const PORT = process.env.PORT || 80;
app.listen(PORT,function(){
    console.log("Servidor listo, corriendo en puerto 80");
});

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use('/products', productsRouter)
app.use('/', mainRouter)

app.get("/productCart",(req,res) => {
    res.render(path.resolve(__dirname,"./views/products/productCart.ejs"),{title:"Carrito de compras"});
});
app.get("/register",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/register.ejs"),{title:"Registro"});
});
app.get("/login",(req,res) => {
    res.render(path.resolve(__dirname,"./views/users/login.ejs"),{title:"Inicia Sesión"});
});
