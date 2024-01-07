const router = require("express").Router();
const { getSales } = require("../../controllers/salesController");
const requireJwt = require("../../middleware/requireJwtAuth");

router.get("/", getSales);

module.exports = router;
