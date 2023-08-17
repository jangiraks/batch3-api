const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleschema = new mongoose.Schema({
  rolename: String,
});

module.exports = {
  roleschema,
};
