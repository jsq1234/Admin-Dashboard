const router = require("express").Router();
const { getProducts } = require("../../controllers/productController");
const requireJwt = require("../../middleware/requireJwtAuth");

router.get("/", getProducts);

module.exports = router;
