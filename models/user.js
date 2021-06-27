const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  cart: {
    type: Schema.Types.ObjectId,
    ref:"Cart"
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;


