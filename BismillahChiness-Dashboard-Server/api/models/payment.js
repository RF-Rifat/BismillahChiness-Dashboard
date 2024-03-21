const mongoose = require("mongoose");

const paymentIntentSchema = new mongoose.Schema({
  clientSecret: {
    type: String,
    required: true,
  },
});

const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
});

const PaymentIntent = mongoose.model("PaymentIntent", paymentIntentSchema);
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = { PaymentIntent, Payment };
