const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageschema = new mongoose.Schema({
  image: String,
  products: { type: Schema.Types.ObjectId, ref: "product" },
});

module.exports = {
  imageschema,
};
