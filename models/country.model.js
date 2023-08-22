const mongoose = require("mongoose");
const { Schema } = mongoose;

const countryschema = new mongoose.Schema({
  country: String,
  // states: [{ type: Schema.Types.ObjectId, ref: 'state' }],
  name: String,
  states: [{ type: Schema.Types.ObjectId, ref: "state" }],
});

module.exports = {
  countryschema,
};
