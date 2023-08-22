const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartschema = new mongoose.Schema({
  userid: { type: Schema.Types.ObjectId, ref: "users" },
  productid: { type: Schema.Types.ObjectId, ref: "product" },
  productquantity: Number,
  productprice: Number,
  producttotalprice: Number,
  taxamount: Number,
  orderamount: Number,
});

module.exports = {
  cartschema,
};
