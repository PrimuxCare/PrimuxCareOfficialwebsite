import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { organization, email, phone, inquiryType, message } = req.body;

  if (!organization || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Change if using another provider
    port: 587,
    secure: false, // true if port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"PrimuxCare Website" <${process.env.EMAIL_USER}>`,
    to: "yourteam@primuxcare.com", // replace with your sales team email
    subject: `New Inquiry: ${inquiryType}`,
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
    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
