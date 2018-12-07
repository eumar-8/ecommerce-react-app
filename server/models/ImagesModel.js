const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Schema definition.
const ImagesSchema = new Schema({
  productID: { type: String, required: true },
  public_id: { type: String, required: true },
  name: { type: String, required: true },
  photo_url: { type: String, required: true }
});

module.exports = mongoose.model("images", ImagesSchema);
