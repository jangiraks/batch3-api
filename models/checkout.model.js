const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkoutschema = new mongoose.Schema({

cartid: { type: Schema.Types.ObjectId, ref: 'cartid' },
});

module.exports = {
     checkoutschema
  }
  