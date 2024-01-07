const router = require("express").Router();
const userRoutes = require("./user");
const productRoutes = require("./product");
const transactionRoutes = require("./transaction");
const salesRoutes = require("./sales");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/transactions", transactionRoutes);
router.use("/sales", salesRoutes);

module.exports = router;
