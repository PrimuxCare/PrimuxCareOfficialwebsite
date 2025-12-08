import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { organization, email, phone, inquiryType, message } = req.body;

    // Configure your Gmail account
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "primuxcare@gmail.com", 
      subject: `New Sales Inquiry from ${organization}`,
      text: `
        Organization: ${organization}
        Email: ${email}
        Phone: ${phone}
        Inquiry Type: ${inquiryType}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
