// utils/sendEmail.js
import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
  // Create a transporter object with SMTP server details
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
