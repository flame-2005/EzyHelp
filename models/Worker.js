// models/Worker.js
import mongoose from 'mongoose';

const WorkerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  currentAddress: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  mobileNo: { type: String, required: true },
  workCategory: { type: String, required: true },
});

export default mongoose.models.Worker || mongoose.model('Worker', WorkerSchema);
