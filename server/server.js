const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/pay", async (req, res) => {
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  });
});
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
