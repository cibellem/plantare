import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_BE_URL}/api`;

export default {
  getAllProducts: function () {
    return axios.get(`${API_BASE_URL}/products`);
  },
  addToCart: function (productData, id) {
    return axios.put(`${API_BASE_URL}/cart/${id}/`, productData);
  },
  removeFromCart: function (id) {
    return axios.delete(`${API_BASE_URL}/cart/${id}`);
  },
  updateCart: function (id, productData) {
    return axios.put(`${API_BASE_URL}/${id}/`, productData);
  },
  getCart: function () {
    return axios.get(`${API_BASE_URL}/cart/`);
  },
  getCartById: function (id) {
    return axios.get(`${API_BASE_URL}/cart/${id}`);
  },
};
