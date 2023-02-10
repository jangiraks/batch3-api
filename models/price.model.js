const mongoose = require("mongoose");
const { Schema } = mongoose;

const priceschema = new mongoose.Schema({
    value: Number,
    effectiveFrom: Date,
    effectiveTo: Date,
    product: { type: Schema.Types.ObjectId, ref: 'product' }
});

module.exports = {
    priceschema
}
