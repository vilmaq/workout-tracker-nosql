const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
// const apiRoutes = require("./controllers/api");
const viewRoutes = require("./controllers/view");

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
// app.use("/api",apiRoutes);
app.use(viewRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
