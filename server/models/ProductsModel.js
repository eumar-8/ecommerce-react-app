const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Schema definition.
const ProductsSchema = new Schema({
  categoryName: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
});

module.exports = mongoose.model("products", ProductsSchema);
