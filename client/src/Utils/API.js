import axios from "axios";

export default {
  getAllProducts: function () {
    return axios.get("/api/products");
  },
  addToCart: function (productData) {
    return axios.post("/api/cart", productData);
  },
  removeFromCart: function (id) {
    return axios.delete(`/api/cart/${id}`);
  },

  //Stripe Test Api
};
// Publishable Stripe APi
let key =
  "pk_test_51Gym5nCvJ2UDgQ5SYanes7eTM2PppoUV41lS4P074iIIOeJmkKXZD0uJPkcjtzwTjMeZcj5VRTbnypNy57HuKtP00027OUjVda";
