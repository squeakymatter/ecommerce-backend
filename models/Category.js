const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection.js')

class Category extends Model {}

Category.init(
  {
    // id (column)
    id: {
      type: DataTypes.INTEGER, // - Integer
      allowNull: false, // - Doesn't allow null values
      primaryKey: true, // - Set as primary key
      autoIncrement: true, // - Uses auto increment
    },
    // category_name (column)
    category_name: {
      type: DataTypes.STRING, // - String
      allowNull: false, // - Doesn't allow null values
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
)

module.exports = Category
