const router = require("express").Router();
const productRoutes = require("./product");

// Book routes
router.use("/products", productRoutes);

module.exports = router;
