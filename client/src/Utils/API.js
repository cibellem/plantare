import axios from "axios";

export default {
  getAllProducts: function () {
    return axios.get("/api/products");
  },
  addToCart: function (productData, id) {
    return axios.put(`/api/cart/${id}/`, productData);
  },
  removeFromCart: function (id) {
    return axios.delete(`/api/cart/${id}`);
  },

  updateCart: function (id, productData) {
    return axios.put(`/api/cart/${id}/`, productData);
  },
  getCart: function () {
    return axios.get(`/api/cart/`);
  },
  getCartById: function (id) {
    return axios.get(`/api/cart/${id}`);
  },
};
