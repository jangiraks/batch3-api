const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderitemsschema = new mongoose.Schema({

orderid:String,
productId:String,
productquantity:Number,
productprice:Number,
producttotalprice:Number,
});

module.exports = {
    orderitemsschema
  }
  