const { create, checkLogin } = require("../controllers/user");
const express = require("express");
const app = express();

app.post("/user", create);
app.get("/checkLogin", checkLogin);

module.exports = app;