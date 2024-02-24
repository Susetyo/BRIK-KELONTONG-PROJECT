module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    category_name:{
      type: Sequelize.STRING
    }
  });

  return Category;
};