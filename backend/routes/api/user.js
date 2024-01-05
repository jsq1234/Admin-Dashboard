const router = require("express").Router();
const requireJwt = require("../../middleware/requireJwtAuth");
const { userInfo, getCustomers } = require("../../controllers/userController");

router.get("/info", requireJwt, userInfo);
router.get("/", getCustomers);

module.exports = router;
