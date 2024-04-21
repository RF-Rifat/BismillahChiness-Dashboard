const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
