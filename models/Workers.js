// models/Workers.js
import mongoose from 'mongoose';

const WorkersSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  currentAddress: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  mobileNo: { type: String, required: true },
  workCategory: { type: String, required: true,unique: true },
});

export default mongoose.models.Workers || mongoose.model('Workers', WorkersSchema);
