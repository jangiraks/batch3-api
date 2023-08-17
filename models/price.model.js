const mongoose = require("mongoose");
const { Schema } = mongoose;

const priceschema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  value: Number,
  effectiveFrom: String,
  effectiveTo: String,
  product: { type: Schema.Types.ObjectId, ref: "products" },
});

module.exports = {
  priceschema,
};
