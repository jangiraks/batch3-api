const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderschema = new mongoose.Schema({
    id:Number,
    number:Number,
    paymentmethod:String,
    paymentstatus:String,      
    orderamount:Number,
    discount:String,
    userid:{ type: Schema.Types.ObjectId, ref: 'user' },
    addressid:[{ type: Schema.Types.ObjectId, ref: 'address' }],

});

module.exports = {
    orderschema
  }
  