const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanSchema = new Schema({
  financing: {
    type: String,
    required: true,
  },
  banking: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  formattedDate: {
    type: Date,
    required: true,
  },
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
