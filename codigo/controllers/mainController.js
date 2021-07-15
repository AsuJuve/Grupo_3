const fs= require('fs');
const path= require('path')
const coursesFilePath= path.join(__dirname, "../data/products.json")
const coursestxt= JSON.parse(fs.readFileSync(coursesFilePath,'utf-8'));



module.exports={
    home: (req,res)=>{
        res.status(200).render('home',{title: 'Inicio','courses':coursestxt})
        
    },
    cursoid:(req,res)=>{
        let id= req.params;
        res.send(id)
        res.render('productDetail',{title: 'Detalle de producto','courses':coursestxt,id})

    }
}
