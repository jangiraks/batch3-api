const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressschema = new mongoose.Schema({
  userid: { type: Schema.Types.ObjectId, ref: "user" },
  housenumber: String,
  street: String,
  landmark: String,
  city: String,
  state: String,
  country: String,
  zip: String,
});

module.exports = {
  addressschema,
};
