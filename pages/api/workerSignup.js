// pages/api/WorkersSignup.js
import dbConnect from '../../utils/dbConnect';
import Workers from '../../models/Workers';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect(); // Connect to MongoDB

  switch (method) {
    case 'POST':
      try {
        const { fullName, currentAddress, district, state, mobileNo, Aadhar, workCategory } = req.body;

        if (!fullName || !currentAddress || !mobileNo|| !Aadhar || !workCategory || !district || !state) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if the mobile number already exists
        const existingWorkers = await Workers.findOne({ mobileNo });
        if (existingWorkers) {
          return res.status(400).json({ error: 'Workers with this mobile number already exists' });
        }

        const newWorkers = new Workers({
          fullName,
          currentAddress,
          district,
          state,
          mobileNo,
          Aadhar,
          workCategory,
        });

        await newWorkers.save();

        res.status(201).json({ success: true, data: newWorkers });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ error: `Method ${method} not allowed` });
      break;
  }
}
