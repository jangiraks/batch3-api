const mongoose = require("mongoose");
const { Schema } = mongoose;

const categoryschema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  name: String,
  products: [{ type: Schema.Types.ObjectId, ref: "product" }],
});

module.exports = {
  categoryschema,
};
