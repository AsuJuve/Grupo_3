const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));

module.exports={
    home: (req,res)=>{
        res.status(200).render('home',{title: 'Inicio','courses':coursestxt})
    },
    showCart: (req,res) => {
        res.render('products/productCart',{title:"Carrito"});
    },
    showDetail: (req,res)=>{
        let id= req.params.id;
        res.render('products/productDetail',{title: 'Detalle de producto',courses:coursestxt,curso:parseInt(id)})
    }
}
