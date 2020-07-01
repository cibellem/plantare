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
// // Set your secret key. Remember to switch to your live secret key in production!
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')('sk_test_51Gym5nCvJ2UDgQ5Su60Sf9Y5OzTvTml1Dr7NRFe1jl0z6KZtczqR6GKdlPy7sMtnKJi5o1XqByIjQPMO3Ntm629T00SKNeIbii');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   // Verify your integration in this guide by including this parameter
//   metadata: {integration_check: 'accept_a_payment'},
// });



//Api routes will go here
app.use(routes);
//Api routes needs to be defined before this runs

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/plantaredb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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
