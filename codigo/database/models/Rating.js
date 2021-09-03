module.exports = function(sequelize,dataTypes) {
    let alias = 'Rating';
    let cols = {
        customer_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "rating",
        timestamps: false
    }
    let Rating = sequelize.define(alias, cols, config);
    
    Rating.associate = function(models) {
        Rating.belongsTo(models.Customer, {
            as: 'customer',
            foreignKey: 'customer_id'
        });
    }
    
    return Rating;
}