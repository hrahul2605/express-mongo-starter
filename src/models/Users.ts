import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userId: String,
  phone: String,
  email: String,
  name: String,
  password: String,
  status: String, // "VERIFIED", "PENDING"
  updatedAt: Number,
  accessToken: String,
});

export default model('user', UserSchema);
