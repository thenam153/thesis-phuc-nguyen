const { DataTypes, Model } = require("sequelize")
const modelName = "Project"
class Project extends Model {}
module.exports = function(sequelize) {
    return Project.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }        
    }, {
        sequelize,
        modelName,
        freezeTableName: false
    })
}
module.exports.Name = modelName