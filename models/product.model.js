const mongoose = require("mongoose");
const { price } = require("../db");
const { Schema } = mongoose;

const productschema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  code: String,
  brand: String,
  name: String,
  category: { type: Schema.Types.ObjectId, ref: "category" },
  price: { type: Schema.Types.ObjectId, ref: "price" },
  image: { type: Schema.Types.ObjectId, ref: "image" },
});

module.exports = {
  productschema,
};
