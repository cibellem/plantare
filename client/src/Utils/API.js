import axios from "axios";

export default {
  getAllProducts: function () {
    return axios.get("/api/products");
  },
  addToCart: function (productData) {
    return axios.post("/api/cart", productData);
  },
};
