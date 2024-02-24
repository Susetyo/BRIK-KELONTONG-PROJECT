const { 
  deleteItems, 
  findAll,
  findById,
  create,
  update
} = require("../controllers/items");
const express = require("express");
const app = express();

app.get("/items",findAll);
app.get("/items/:id", findById);
app.post("/items",create);
app.put("/items/:id", update);
app.delete("/items/:id", deleteItems);

module.exports = app;