const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  quantity: { type: Number },
});

//Initial database structure. These are the products.
const Product = mongoose.model("Product", productSchema);

Product.create(
  {
    name: "Cactus",
    price: 15,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/cactus.png",
  },
  {
    name: "Fiddle-leaf Fig",
    price: 55,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/fig-leaf.png",
  },
  {
    name: "Aloe Vera",
    price: 25,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/aloe.png",
  },
  {
    name: "Boston Fern",
    price: 20,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016444/boston.jpg",
  },
  {
    name: "Bird of Paradise",
    price: 75,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/birdof-paradise.png",
  },
  {
    name: "Zanzibar Gem",
    price: 30,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/zanzibar.png",
  },
  {
    name: "Banana Leaf Plant",
    price: 100,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590014908/banana-leaf.png",
  },
  {
    name: "Parlour Palm ",
    price: 65,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/parlourpalm.png",
    quantity: 1,
  },
  {
    name: "Snake Plant",
    price: 35,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016444/snake_plant.png",
  },

  // Drop the 'plantare' collection from the current database
  Product.db.dropCollection("products", function (err, result) {
    console.log(result);
  })
);

module.exports = Product;
