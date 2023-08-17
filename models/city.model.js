const mongoose = require("mongoose");
const { Schema } = mongoose;

const cityschema = new mongoose.Schema({
  state: { type: Schema.Types.ObjectId, ref: 'state' },
    name: String,

  });
  
  module.exports = {
    cityschema
  }
  