const mongoose = require("mongoose");
const { Schema } = mongoose;

const stateschema = new mongoose.Schema({
  country: { type: Schema.Types.ObjectId, ref: 'countries' },
  name: String,
  // cities: [{ type: Schema.Types.ObjectId, ref: 'city' }],
  });
  
  module.exports = {
    stateschema
  }
  