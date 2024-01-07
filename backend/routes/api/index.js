const router = require("express").Router();
const userRoutes = require("./user");
const productRoutes = require("./product");
const transactionRoutes = require("./transaction");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
