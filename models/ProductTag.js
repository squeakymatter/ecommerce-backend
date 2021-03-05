const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class ProductTag extends Model {}

ProductTag.init(
  {
    //define columns
    id: {
      type: DataTypes.INTEGER, // - Integer
      allowNull: false, // - Doesn't allow null values
      primaryKey: true, // - Set as primary key
      autoIncrement: true, // - Uses auto increment
    },
    product_id: {
      type: DataTypes.INTEGER, // - Integer
      references: {
        //References the product model's id
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // - Integer
      references: {
        // - References the tag model's id
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
)

module.exports = ProductTag
