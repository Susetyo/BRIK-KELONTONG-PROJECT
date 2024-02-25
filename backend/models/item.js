'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.BIGINT,
    width: DataTypes.BIGINT,
    length: DataTypes.BIGINT,
    height: DataTypes.BIGINT,
    image_url: DataTypes.STRING,
    price: DataTypes.BIGINT,
    categoryId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};