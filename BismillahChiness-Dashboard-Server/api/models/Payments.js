const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the payment model
const paymentSchema = new Schema({
  email: String,
  price: Number,
  transactionId: String,
  date: Date,
  status: String,
  billingType: String,
  month: String,
});

// Create a Mongoose model based on the payment schema
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
