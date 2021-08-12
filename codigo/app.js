const express = require("express");
const app = express();

const cookieParser = require("cookie-parser")
app.use(cookieParser())
//const recordarmeMiddleware= require('./middlewares/recordarmeMiddleware')
//app.use(recordarmeMiddleware())

//URL Encoded
app.use(express.urlencoded({extended: false}));

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

//Session
const session = require('express-session');
app.use(session({
    secret: 'Keep Learning',
    resave: false,
    saveUnitialized: false,
}))

app.use(express.json());
app.use(express.urlencoded({extended: false})); 

app.use('/users', userRouter);
app.use('/products', productsRouter);
app.use('/', mainRouter);