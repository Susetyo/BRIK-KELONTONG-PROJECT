const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

const create = (req, res) => {
  const {userName, password, fullName} = req?.body;

  User.create({ userName,password, fullName})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while registering account."
      });
    });
};

const checkLogin = (req, res) => {
  const {userName, password} = req.query;

  User.findOne({
    where:{
      userName:{ [Op.eq]: userName },
      password:{ [Op.eq]: password }
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error Username or Password !!!" 
      });
    });
};

module.exports = { create, checkLogin }
