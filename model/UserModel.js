// backend/model/UserModel.js

const mongoose = require("mongoose");
const UserSchema = require("../schemas/UserSchema");

const User = mongoose.model("User", UserSchema); // ✅ Correct use of mongoose.model
module.exports = User;                            // ✅ Export directly