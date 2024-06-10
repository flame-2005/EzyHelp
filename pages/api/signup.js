import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../../utils/sendEmail';

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { name, email, phone, password } = req.body;

      try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
          return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
          name,
          email,
          phone,
          password,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // Send welcome email
        const subject = 'Account Created Successfully';
        const text = `Hi ${name},\n\nYour account has been created successfully.\n\nThank you for signing up!`;
        await sendEmail(email, subject, text);

        // Return jsonwebtoken (optional: for session management)
        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: '1h' }, // Adjust as per your needs
          (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
          }
        );
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
