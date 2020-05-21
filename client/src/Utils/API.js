import axios from "axios";

export default {
  getAllProducts: function () {
    return axios.get("/api/products");
  },
};
