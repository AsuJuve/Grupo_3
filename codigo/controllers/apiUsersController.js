const { showDetail } = require('./mainController');
const db = require("../database/models")
const {validationResult} = require("express-validator");

module.exports={
    index: async function (req,res){ 
        let customers = await db.Customer
        .findAll({raw:true})
        
    customers= customers.map(e=>{
        return {
            id: e.customer_id ,
            name: e.customer_firstname + " " + e.customer_lastname,
            email: e.customer_email,
            detail: "http://localhost:3000/api/users/"+ e.customer_id
        }
    })
                return res.status(200).json({
                    count: customers.length,
                    users: customers
                })
                     
        }
    ,
    detail: function (req,res){
        db.Customer
        .findByPk(req.params.id)
        .then(customer =>{
            return res.status(200).json({
                id: customer.customer_id,
                firstName: customer.customer_firstname,
                lastName: customer.customer_lastname, 
                email: customer.customer_email,
                profileImage: customer.customer_image,
                status: 200
            })
        })
    }
}