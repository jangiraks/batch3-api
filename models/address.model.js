const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressschema = new mongoose.Schema({
    user:{ type: Schema.Types.ObjectId, ref: 'users' },
    housenumber: String,
    street: String,
    address: String,
    landmark: String,
    city: String,
    state: String,
    country: String,
    zip: String
  });
  
  module.exports = {
    addressschema
  }
  