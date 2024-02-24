const itemsRoutes = require("./routes/item");
const categoryRoutes = require("./routes/category")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(itemsRoutes);
app.use(categoryRoutes);

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server listening on port ${process.env.NODE_PORT}`);
});