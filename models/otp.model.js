const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const Otp = new Schema({
  id: { type: Number, unique: true, min: 1 },
  member: { type: Schema.Types.ObjectId, ref: "members" },
  email: { type: String, require: true },
  otp: { type: String, require: true },
});

Otp.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }
  autoIncrementModelID("otp", this, next);
});

module.exports = mongoose.model("otp", Otp);
