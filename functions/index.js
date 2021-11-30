const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const { response } = require("express");

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); //sort of allow us to send data and pass it in the json format

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/roopali", (request, response) => response.status(200).send("ALMOST THERE"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for ", total, "amount");

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  // 201 is {OK - Created}->{Here we created a paymentIntent}   and    [200 is usually GOOD]
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint (after emulator cli -> functions[api]: http function initialized (..))
// http://localhost:5001/amozon-clone-1/us-central1/api
