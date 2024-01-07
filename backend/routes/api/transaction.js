const router = require("express").Router();
const { getTransactions } = require("../../controllers/transactionController");
const requireJwt = require("../../middleware/requireJwtAuth");

router.get("/", getTransactions);

module.exports = router;
