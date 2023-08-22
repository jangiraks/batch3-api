const mongoose = require("mongoose");
const { Schema } = mongoose;

const cityschema = new mongoose.Schema({
  state: { type: Schema.Types.ObjectId, ref: "state" },
  city: String,
  //  city: [{ type: Schema.Types.ObjectId, ref: 'city' }],
});

module.exports = {
  cityschema,
};
