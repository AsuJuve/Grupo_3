module.exports = function(sequelize,dataTypes) {
    let alias = 'Shopping_cart';
    let cols = {
        shopping_cart_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: dataTypes.STRING,
            allowNull: false
        },
        amount:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "shopping_cart",
        timestamps: false
    }
    let Shopping_cart = sequelize.define(alias, cols, config);
    
    Shopping_cart.associate = function(models) {
        Shopping_cart.hasOne(models.Customer, {
            as: 'customer',
            foreignKey: 'customer_id'
        });
    }

    return Shopping_cart;
}