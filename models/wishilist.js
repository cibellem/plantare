const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whishSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  image: { type: String },
});

const Wish = mongoose.model("Wish", whishSchema);
module.exports = Wish;
