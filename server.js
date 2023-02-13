//Dependencies and modules
const express = require("express");
const path = require("path");
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

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// //STRIPE
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

//Api routes will go here
app.use(routes);
//Api routes needs to be defined before this runs
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://cibellem:root@cluster0.bnk4x.mongodb.net/plantare?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to the the DB!")
);

//Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Starts the server and syncing models

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
