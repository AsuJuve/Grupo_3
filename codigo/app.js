const express = require("express");
const app = express();

//Path
const path = require("path");
app.use(express.static(path.resolve(__dirname,"./public")));

//Method override
const methodOverride= require('method-override')
app.use(methodOverride('_method'));

//Routes
const userRouter = require('./routes/userRouter');
const productsRouter= require('./routes/productsRouter');
const mainRouter= require('./routes/mainRouter');

//EJS
app.set("view engine","ejs");

//Port
const PORT = process.env.PORT || 80;
app.listen(PORT,function(){
    console.log("Servidor listo, corriendo en puerto 80");
});

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/', mainRouter);