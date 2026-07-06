const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: String,

    items: Array,

    total: Number,

    status: {
      type: String,
      default: "Order Placed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Order",
  orderSchema
);