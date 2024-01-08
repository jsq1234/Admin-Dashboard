const router = require("express").Router();
const userRoutes = require("./user");
const productRoutes = require("./product");
const transactionRoutes = require("./transaction");
const salesRoutes = require("./sales");
const dashboardRoutes = require("./dashboard");

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/transactions", transactionRoutes);
router.use("/sales", salesRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
