const db = require("../models");

// Defining methods for the products controller
module.exports = {
  findAll: function (req, res) {
    db.Cart.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err + "test"));
  },
  findById: function (req, res) {
    db.Cart.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Cart.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Cart.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Cart.findByIdAndUpdate({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  count: function (req, res) {
    db.Cart.find(req.query)
      .countDocuments({ name: new RegExp(req.params.name, "i") })
      .then((dbModel) => console.log(res.json(dbModel)))
      .catch((err) => res.status(422).json(err + "test"));
  },
};
