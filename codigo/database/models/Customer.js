module.exports = function(sequelize,dataTypes) {
    let alias = 'Customer';
    let cols = {
        customer_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_firstname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        customer_lastname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        customer_email:{
            type: dataTypes.STRING,
            unique: true,
            allowNull: false
        },
        customer_password:{
            type: dataTypes.STRING,
            allowNull: false
        },
        customer_type:{
            type: dataTypes.STRING,
            allowNull: false
        },
        customer_image:{
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tableName: "customers",
        timestamps: false
    }

    let Customer = sequelize.define(alias, cols, config);
    
    Customer.associate = function(models) {
        Customer.hasOne(models.Shopping_cart, {
            as: 'shopping_cart',
            foreignKey: 'customer_id'
        });
    }
    Customer.associate = function(models) {
        Customer.hasMany(models.Rating, {
            as: 'rating',
            foreignKey: 'customer_id'
        });
    }

    return Customer;
}