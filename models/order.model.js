const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderschema = new mongoose.Schema({
  userid: { type: Schema.Types.ObjectId, ref: "users" },
  brand: String,
  paymentmethod: String,
  paymentstatus: String,
  orderamount: Number,
  discount: String,
  // orderitemsid:[{ type: Schema.Types.ObjectId, ref: 'orderitems' }],
  addressid: { type: Schema.Types.ObjectId, ref: "address" },
});

module.exports = {
  orderschema,
};
