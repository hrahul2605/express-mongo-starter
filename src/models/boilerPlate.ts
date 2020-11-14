import { Schema, model } from 'mongoose';

const boilerPlateSchema = new Schema({
  message: String,
  createAt: { type: Number, default: Date.now() },
});

export default model('bolierPlate', boilerPlateSchema);
