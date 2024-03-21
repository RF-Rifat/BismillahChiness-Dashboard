const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define testimonialSchema before using it
const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Now you can use testimonialSchema to define your model
const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// Export the model
module.exports = Testimonial;
