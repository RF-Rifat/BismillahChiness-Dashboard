const mongoose = require("mongoose");
const { Schema } = mongoose;


const topProductSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});
// Define testimonialSchema before using it
const homeDataSchema = new Schema(
  {
    marquee: {
      type: String,
      required: true,
    },
    carousel: {
      type: Array,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    topProduct: {
      type: [topProductSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("HomeData", homeDataSchema);

// Export the model
module.exports = Testimonial;
