require("dotenv").config();

const app = require("express")();
const port = 3001;

const path = require("path");
const cors = require("cors");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount; //read amount from the request body
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Backend running at localhost:${port}`);
});
