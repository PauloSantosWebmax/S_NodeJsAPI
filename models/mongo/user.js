const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: String, default: Date.now(), required: true },
  updated_at: { type: String, default: '', required: false },
});

UserSchema.methods.encrypt = (value) => {
  return bcrypt.hashSync(value);
};

module.exports = mongoose.model('User', UserSchema);
