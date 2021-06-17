const express = require("express");
const app = express();

app.listen(3000,function(){
    console.log("Servidor listo");
});

const path = require("path");

app.use(express.static(path.resolve(__dirname,"./public")));

app.post('/home', (req, res) => {
    console.log(req.body)
    res.sendFile('./home.html', { root: 'views' })
});

app.get("/Carrito",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/productCart.html"));
});
app.get("/Registro",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});
app.get("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});
