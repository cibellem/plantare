module.exports = function (sequelize, DataTypes) {
  var products = sequelize.define("products", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    thumbnail_url: DataTypes.STRING,
  });
  return products;
};
