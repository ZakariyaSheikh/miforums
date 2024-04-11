// api/send-email.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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'); // Replace with your SendGrid API key

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { to, from, subject, text } = req.body;

    const msg = {
      to,
      from,
      subject,
      text,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
