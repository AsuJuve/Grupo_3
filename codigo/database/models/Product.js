module.exports = function(sequelize,dataTypes) {
    let alias = 'Product';
    let cols = {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        short_description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        long_description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        product_image:{
            type: dataTypes.STRING,
            allowNull: false
        },
        product_price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        enrolled_students:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        value_rating:{
            type:dataTypes.DECIMAL,
            allowNull:false
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };
    let Product = sequelize.define(alias, cols, config);
    
    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
    }

    Product.associate = function(models) {
        Product.belongsTo(models.Shopping_cart_products, {
            as: 'Shopping_cart_products',
            foreignKey: 'product_id'
        });
    }
    Product.associate = function(models) {
        Product.hasMany(models.Requirement, {
            as: 'requirements',
            foreignKey: 'product_id'
        });
    }
    
    return Product;
}