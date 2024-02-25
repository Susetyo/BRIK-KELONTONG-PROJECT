const db = require("../models");
const Items = db.item;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, items, totalPages, currentPage };
};

const findAll = (req, res) => {
  const { page, size, name } = req.query;
  let condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  Items.findAndCountAll({  where: condition, limit, offset, order: [[['id', 'DESC']]]})
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Items."
      });
    });
};

const create = (req, res) => {
  const items = {
    sku:req.body.sku,
    name:req.body.name, 
    description:req.body.description, 
    weight:req.body.weight, 
    width:req.body.width, 
    length:req.body.length, 
    height:req.body.height, 
    image:req.body.image, 
    harga:req.body.harga, 
    category_id:req.body.category_id
  };

  Items.create(items)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Items."
      });
    });
};

const findById = (req, res) => {
  const id = req.params.id;

  Items.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Items with id=" + id
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Items.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Items was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Items with id=${id}. Maybe Items was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Items with id=" + id
      });
    });
};

const deleteItems = (req, res) => {
  const id = req.params.id;

  Items.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Items was deleted successfully!",
          id
        });
      } else {
        res.send({
          message: `Cannot delete Items with id=${id}. Maybe Items was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Items with id=" + id
      });
    });
};


module.exports =  { 
  deleteItems, 
  findAll, 
  findById, 
  create, 
  update
}