// const router = require("express").Router();
const path = require("path");

const renderWorkouts = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
};

const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
};

module.exports = { renderWorkouts, renderStats };
