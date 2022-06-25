const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    fullName: String,
    displayName: String,
    email: String,
    password: String,
    phoneNum: String,
    address1: String,
    address2: String,
    city: String,
    county: String,
    state: String,
    zipCode: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
