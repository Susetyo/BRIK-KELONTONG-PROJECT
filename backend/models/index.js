const dotenv = require("dotenv");
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  dialect: 'postgres',
  host: process.env.PG_HOST,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.item = require("./item.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);

module.exports = db;