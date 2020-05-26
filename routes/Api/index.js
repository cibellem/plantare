const router = require("express").Router();
const productRoutes = require("./product");
const cartRoutes = require("./cart");

// Products routes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
