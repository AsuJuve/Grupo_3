module.exports = function(sequelize,dataTypes) {
    let alias = 'Shopping_cart_products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        shopping_cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "shopping_cart_products",
        timestamps: false
    }
    let Shopping_cart_products = sequelize.define(alias, cols, config);
    
    Shopping_cart_products.associate = function(models) {
        Shopping_cart_products.hasMany(models.Product, {
            as: 'Product',
            foreignKey: 'product_id'
        });
    }
    
    return Shopping_cart_products;
}