const router = require("express").Router();
const productRoutes = require("./product");
const cartRoutes = require("./cart");
const wishRoutes = require("./wish");

// Products routes
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/cart", wishRoutes);

module.exports = router;
