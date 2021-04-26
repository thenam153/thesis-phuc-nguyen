const { DataTypes, Model } = require("sequelize")
const modelName = "Api"
class Api extends Model {}
module.exports = function(sequelize) {
    return Api.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.TEXT,
            allowNull: false
        }        
    }, {
        sequelize,
        modelName,
        freezeTableName: false
    })
}
module.exports.Name = modelName