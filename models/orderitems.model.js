const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderitemsschema = new mongoose.Schema({

  userid:{ type: Schema.Types.ObjectId, ref: 'users' },
  orderid:{ type: Schema.Types.ObjectId, ref: 'order' },
  productId:{ type: Schema.Types.ObjectId, ref: 'product' },
  productquantity:Number,
  productprice:Number,
  producttotalprice:Number,
});

module.exports = {
    orderitemsschema
  }
  