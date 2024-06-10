import dbConnect from '../../utils/dbConnect';
import Address from '../../models/Address';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const recipientPhoneNumber = process.env.RECIPIENT_PHONE_NUMBER;

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { name, email, phone, pincode, address } = req.body;

    if (!name || !email || !phone || !pincode || !address) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const newAddress = new Address({
        name,
        email,
        phone,
        pincode,
        address,
      });

      const savedAddress = await newAddress.save();

      // Send SMS
      const messageBody = `New Address Saved:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPincode: ${pincode}\nAddress: ${address}`;

      await client.messages.create({
        body: messageBody,
        from: twilioPhoneNumber,
        to: recipientPhoneNumber,
      });

      res.status(201).json({ message: 'Address saved and SMS sent', data: savedAddress });
    } catch (error) {
      console.error('Error saving address or sending SMS:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
