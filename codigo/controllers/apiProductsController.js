const { showDetail } = require('./mainController');
const db = require("../database/models")
const {validationResult} = require("express-validator");

module.exports={
    index: async function (req,res){

    let categories= await db.Category
        .findAll({raw:true})
        categories= categories.map(category=>{
            return {
                idCategory: category.category_id,
                nameCategory: category.category_name
            };
        });

    let products = await db.Product
        .findAll({raw:true})
        let categoryDic=[];

        products= products.map(e=>{
            for(let i=0; i< categories.length; i++){
                if(e.category_id == categories[i].idCategory){ 
                    categoryDic.push(categories[i].nameCategory)
                    return {
                        id: e.product_id,
                        name: e.product_name,
                        description: e.short_description,
                        category: categories[i].nameCategory ,
                        detail: "http://localhost:3000/api/products/"+e.product_id
                    };
                } ;
            };
        });

        let categoryCount= categoryDic.reduce((count,name)=>{
            count[name]= (count[name] || 0)+1;
            return count
        },{});

            return res.status(200).json({
                count: products.length,
                countByCategory: categoryCount,
                products: products,
                status: 200
            });
    },
    detail: async function (req,res){

        let categories= await db.Category
        .findAll({raw:true})
        categories= categories.map(category=>{
            return {
                idCategory: category.category_id,
                nameCategory: category.category_name
            };
        });

        let products = await db.Product
            .findByPk(req.params.id)
            .then(product =>{
                for(let i=0; i< categories.length; i++){
                    if(product.category_id == categories[i].idCategory){
                        return res.status(200).json({
                            id: product.product_id,
                            name: product.product_name,
                            shortDescription: product.short_description,
                            longDescription: product.long_description,
                            productPrice: product.product_price,
                            enrolledStudents: product.enrolled_students,
                            categoryId: product.category_id,
                            valueRating: product.value_rating,
                            category: categories[i].nameCategory,
                            productImage: product.product_image,
                            status: 200
                        })
                    }
                }
            })
        return products;
        }
};