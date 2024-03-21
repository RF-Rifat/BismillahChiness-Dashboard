const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  cardNum: {
    type: Number,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  senderId: {
    type: String,
    require: true,
  },
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
