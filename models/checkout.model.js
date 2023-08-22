const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkoutschema = new mongoose.Schema({
  userid: { type: Schema.Types.ObjectId, ref: "users" },
  cartid: { type: Schema.Types.ObjectId, ref: "cartid" },
});

module.exports = {
  checkoutschema,
};
