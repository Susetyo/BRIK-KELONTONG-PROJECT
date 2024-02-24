const { getItems, createItems, updateItems, getItemById, deleteItems } = require("../controllers/items");
const express = require("express");
const app = express();

app.get("/items", getItems);
app.get("/items/:id", getItemById);
app.post("/items",createItems);
app.put("/items/:id", updateItems);
app.delete("/items/:id", deleteItems);

module.exports = app;