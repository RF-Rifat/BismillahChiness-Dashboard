const mongoose = require("mongoose");
const { Schema } = mongoose;

const carouselSchema = new Schema({
  imgSrc: {
    type: String,
    required: true,
  },
});


const homeDataSchema = new Schema({
  marquee: {
    type: String,
    required: true,
  },
  carousel: {
    type: [carouselSchema],
    required: true,
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: "Home data cannot be empty.",
    },
  },
});

const HomeData = mongoose.model("HomeData", homeDataSchema);

module.exports = HomeData;
