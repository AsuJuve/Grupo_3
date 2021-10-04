module.exports = function(sequelize,dataTypes) {
    let alias = 'Requirement';
    let cols = {
        requirement_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        requirement_description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "requirements",
        timestamps: false
    };
    let Requirement = sequelize.define(alias, cols, config);
    
    Requirement.associate = function(models) {
        Requirement.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        });
    }
    
    
    return Requirement;
}