const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartschema = new mongoose.Schema({

cartid: String,
productid:String,
productquantity:Number,
productprice:Number,
producttotalprice:Number,
taxamount:Number,
orderamount:Number

});

module.exports = {
     cartschema
  }
  