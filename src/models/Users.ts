import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  userId: String,
  phone: String,
  email: {
    type: String,
    lowercase: true,
  },
  name: String,
  password: String,
  status: String, // "VERIFIED", "PENDING"
  updatedAt: Number,
});

export default model('user', UserSchema);
