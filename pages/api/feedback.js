import dbConnect from '../../utils/dbConnect';
import Feedback from '../../models/Feedback';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({ success: true, data: feedback });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
