const router = require("express").Router();
const wishListController = require("../../controllers/wishListController");

// Matches with "/api/cart"
router
  .route("/")
  .get(wishListController.findAll)
  .post(wishListController.create);

// Matches with "/api/cart/:id"
router
  .route("/:id")
  .get(wishListController.findById)
  .put(wishListController.update)
  .delete(wishListController.remove);

module.exports = router;
