const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  userlist: {type: mongoose.Schema.Types.ObjectId, ref: 'List'},
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;