const { create, checkLogin } = require("../controllers/user");
const express = require("express");
const app = express();

app.post("/user", create);
app.post("/checkLogin", checkLogin);

module.exports = app;