const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCardSchema = new Schema(
  {
    cardType: { type: String, required: true },
    cvv: { type: String, required: true },
    creditLimit: { type: Number, required: true },
    availableCredit: { type: Number, required: true },
    cardStatus: {
      type: String,
      enum: ["Active", "Inactive", "Lost/Stolen"],
      required: true,
    },
    cardNumber: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
