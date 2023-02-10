const mongoose = require("mongoose");
const { Schema } = mongoose;

const productschema = new mongoose.Schema({
    code: String,
    brand: String,
    name: String,
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    price: [{ type: Schema.Types.ObjectId, ref: 'price' }]
});

module.exports = {
    productschema
}
