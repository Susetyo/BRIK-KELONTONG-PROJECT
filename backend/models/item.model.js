module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    sku:{
      type: Sequelize.STRING
    },
    name:{
      type: Sequelize.STRING
    }, 
    description:{
      type: Sequelize.STRING
    }, 
    weight:{
      type: Sequelize.BIGINT
    }, 
    width:{
      type: Sequelize.BIGINT
    }, 
    length:{
      type: Sequelize.BIGINT
    }, 
    height:{
      type: Sequelize.BIGINT
    }, 
    image:{
      type: Sequelize.BIGINT
    }, 
    harga:{
      type: Sequelize.BIGINT
    }, 
    category_id:{
      type: Sequelize.BIGINT
    }
  });

  return Item;
};