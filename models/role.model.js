const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleschema = new mongoose.Schema({
    name: String
});

module.exports = {
    roleschema
}
