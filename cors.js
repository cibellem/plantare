"use strict";

module.exports = function (app) {
  const cors = require("cors");
  var whitelist = ["http://localhost:3001/", "http://localhost/"];
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, PUT, POST, DELETE",
  };
  const publicOptions = {
    origin: function (origin, callback) {
      callback(null, true);
    },
    methods: "GET",
  };

  app.options("*", cors(corsOptions));
  app.use(cors(corsOptions));
  app.use("./models/images", cors(publicOptions));
};
