const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

// Set up nodemailer with SendGrid
const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: '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',
    pass: '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',
  },
});

app.post('/submit-form', async (req, res) => {
  try {
    const { fullName, socialHandles, company, website, mediaPageLink, files } = req.body;

    // Create email content
    const emailContent = `
      Full Name: ${fullName}
      Social Handles: ${socialHandles}
      Company: ${company}
      Website: ${website}
      Media Page Link: ${mediaPageLink}
    `;

    // Send email
    await transporter.sendMail({
      from: 'your-email@example.com',
      to: 'recipient@example.com', // Change this to your recipient email address
      subject: 'New Form Submission',
      text: emailContent,
    });

    // You can handle file attachments here if needed

    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
