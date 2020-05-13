//Dependencies and modules
const express = require("express");
const path = require("path");
//Tells node that we are creating an express server
const app = express();
//Sets an initial PORT that will listen for requests from the client side
const PORT = process.env.PORT || 3001;

//Middlewares = function that will be executed in between request and response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Api routes will go here

//Api routes needs to be defined before this runs

//Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
