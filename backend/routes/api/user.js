const router = require("express").Router();
const requireJwt = require("../../middleware/requireJwtAuth");
const {
  userInfo,
  getCustomers,
  getAdmins,
} = require("../../controllers/userController");

router.get("/info", requireJwt, userInfo);
router.get("/", getCustomers);
router.get("/admin", getAdmins);

module.exports = router;
