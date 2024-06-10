// pages/api/workerSignup.js
import dbConnect from '../../utils/dbConnect';
import Worker from '../../models/Worker';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect(); // Connect to MongoDB

  switch (method) {
    case 'POST':
      try {
        const { fullName, currentAddress, mobileNo, workCategory, email } = req.body;

        if (!fullName || !currentAddress || !mobileNo || !workCategory || !email) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        const newWorker = new Worker({
          fullName,
          currentAddress,
          mobileNo,
          workCategory,
          email,
        });

        await newWorker.save();

        res.status(201).json({ success: true, data: newWorker });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ error: `Method ${method} not allowed` });
      break;
  }
}
