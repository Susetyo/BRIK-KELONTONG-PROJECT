const { findAll, create } = require("../controllers/category");
const express = require("express");
const app = express();

app.get("/category", findAll);
app.post("/category", create);

module.exports = app;