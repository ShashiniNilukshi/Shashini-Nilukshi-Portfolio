const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// POST endpoint for form submission
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a transporter using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your_email@gmail.com', // Your email address
      pass: 'your_password' // Your email password
    }
  });

  // Message object
  let mailOptions = {
    from: 'your_email@gmail.com', // Sender email address
    to: 'recipient_email@example.com', // Recipient email address
    subject: 'New Message from Contact Form',
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ code: 500, message: 'Internal server error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ code: 200, message: 'Message sent successfully' });
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
