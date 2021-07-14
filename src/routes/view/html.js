const router = require("express").Router();
const path = require("path");

const { renderWorkouts, renderStats } = require("../../controllers/html");

router.get("/exercise", renderWorkouts);
router.get("/stats", renderStats);

module.exports = router;
