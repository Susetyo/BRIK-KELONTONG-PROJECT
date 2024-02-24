// const logger = require("./configuration/logger.js");
// const loggerMiddleware = require("./middlewares/logger.js");
const routes = require("./routes/item");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());
// app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server listening on port ${process.env.NODE_PORT}`);
  // logger.info(`Server listening on port ${process.env.NODE_PORT}!`);
});