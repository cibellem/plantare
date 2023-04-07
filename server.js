//Dependencies and modules
const express = require("express");
const path = require("path");
const cors = require("cors");
//Tells node that we are creating an express server
const app = express();
//Calls mongoose an odm for MongoDB
const mongoose = require("mongoose");
//Sets an initial PORT that will listen for requests from the client side
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

//Middlewares = function that will be executed in between request and responses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//STRIPE
const stripe = require("stripe")(process.env.STRIPE_TEST);

// const calculateOrderAmount = (items) => {
//   console.log(items);
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

//API routes
app.use(routes);
//Api routes needs to be defined before DB connection
//Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const { MONGO_DB_URL } = process.env;
//Api routes needs to be defined before this runs
mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Mongodb connected and Server is running at ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error.");
  });
