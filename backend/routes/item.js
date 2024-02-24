const { getItems, createItems } = require("../controllers/items");
const express = require("express");
const app = express();
const itemRouter = express.Router();

app.get("/items", getItems);
app.post("/items",createItems);


module.exports = app;