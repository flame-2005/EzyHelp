import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    const instance = new Razorpay({
      key_id,
      key_secret,
    });

    const { amount, currency, receipt } = req.body;

    const options = {
      amount: amount * 100, // Amount in paise
      currency,
      receipt,
    };

    try {
      const order = await instance.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
