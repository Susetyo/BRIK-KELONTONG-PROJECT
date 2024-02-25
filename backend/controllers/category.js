const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

const findAll = (req, res) => {
  const categoryName = req.query.categoryName;
  let condition = categoryName ? { categoryName: { [Op.iLike]: `%${title}%` } } : null;

  Category.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category."
      });
    });
};

const create = (req, res) => {
  const category = {
    categoryName: req.body.categoryName,
  };

  Category.create(category)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category."
      });
    });
};

module.exports = { findAll, create }