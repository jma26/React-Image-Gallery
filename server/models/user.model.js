const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  username: {
    type: String,
    unique: true
  },
  phoneNumber: Number,
  userPhoto: {
    data: Buffer,
    contentType: String,
  }
}, { timestamps: true })

module.exports = new mongoose.model('User', userSchema);