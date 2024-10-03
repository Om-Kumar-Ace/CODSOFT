// pages/api/sendContactForm.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Add your form handling logic here
    // For example, send an email or save the data to a database

    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
