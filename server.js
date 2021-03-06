const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const routes = require("./src/routes/index");
// const apiRoutes = require("./controllers/api");
// const viewRoutes = require("./src/routes/view/html");

const { DB_URL, MONGOOSE_OPTIONS } = require("./src/config");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./src/public"));

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
