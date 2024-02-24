const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

const findAll = (req, res) => {
  const category_name = req.query.category_name;
  let condition = category_name ? { category_name: { [Op.iLike]: `%${title}%` } } : null;

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
    category_name: req.body.category_name,
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