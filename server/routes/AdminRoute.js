const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Schema definition.
const AdminSchema = new Schema({
  username: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("admins", AdminSchema);
