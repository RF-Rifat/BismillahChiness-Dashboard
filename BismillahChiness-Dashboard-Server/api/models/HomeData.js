const mongoose = require("mongoose");
const { Schema } = mongoose;

const homeDataSchema = new Schema({
  marquee: {
    type: Schema.Types.ObjectId,
    ref: "Marquee",
    required: true,
  },
  carousel: [
    {
      type: Schema.Types.ObjectId,
      ref: "Carousel",
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "Carousel data cannot be empty.",
      },
    },
  ],
});

const HomeData = mongoose.model("HomeData", homeDataSchema);

module.exports = HomeData;
