const express = require("express");
const app = express();

app.listen(3000,function(){
    console.log("Servidor montado en el puerto 3000");
});

const path = require("path");

app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});