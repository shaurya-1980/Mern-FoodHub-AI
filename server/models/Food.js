const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
    },

    rating: {
      type: Number,
      default: 4.8,
    },

    deliveryTime: {
      type: String,
      default: "20 mins",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);