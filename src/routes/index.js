const router = require("express").Router();
const api = require("./api/api");
const views = require("./view/html");

router.use("/", views);
router.use("/api", api);

module.exports = router;
