const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  dob: Date,
  mobile: Number,
  email: String,
  gender: String,
  role: [{ type: Schema.Types.ObjectId, ref: 'role' }],
  password: String,
  addressess: [{ type: Schema.Types.ObjectId, ref: 'address' }],
});

module.exports = {
  userschema
}
