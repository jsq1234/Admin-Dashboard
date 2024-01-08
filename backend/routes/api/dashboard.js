const router = require("express").Router();
const { getDashboardStats } = require("../../controllers/dashboardController");
const requireJwt = require("../../middleware/requireJwtAuth");

router.get("/", getDashboardStats);

module.exports = router;
