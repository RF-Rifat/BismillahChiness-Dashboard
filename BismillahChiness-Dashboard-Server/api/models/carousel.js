const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselSchema = new Schema({
  imgSrc: {
    type: String,
    required: true,
  },
});

const Carousel = mongoose.model("Carousel", carouselSchema);

module.exports = Carousel;
