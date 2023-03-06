const mongoose = require("mongoose");
const { Schema } = mongoose;

const countryschema = new mongoose.Schema({
    name: String,
    states: [{ type: Schema.Types.ObjectId, ref: 'state' }],
});

module.exports = {
    countryschema
}