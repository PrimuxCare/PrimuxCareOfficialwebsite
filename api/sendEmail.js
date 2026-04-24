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

    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <div style="background: linear-gradient(to right, #059669, #14b8a6); padding: 30px 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">New Inquiry Received</h2>
          <p style="color: #d1fae5; margin: 8px 0 0 0; font-size: 15px; font-weight: 500;">PrimuxCare Website Notification</p>
        </div>
        
        <div style="padding: 35px 30px; background-color: #ffffff;">
          <h3 style="color: #111827; margin-top: 0; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; font-size: 18px; font-weight: 600;">Contact Details</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 150px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name / Org</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 16px; font-weight: 500;">${organization || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                <a href="mailto:${email}" style="color: #059669; text-decoration: none; font-size: 16px; font-weight: 500;">${email || 'Not provided'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                <a href="tel:${phone}" style="color: #059669; text-decoration: none; font-size: 16px; font-weight: 500;">${phone || 'Not provided'}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Type</td>
              <td style="padding: 12px 0;">
                <span style="background-color: #ecfdf5; color: #065f46; padding: 6px 12px; border-radius: 9999px; font-size: 14px; font-weight: 600; border: 1px solid #a7f3d0;">
                  ${inquiryType || 'General'}
                </span>
              </td>
            </tr>
          </table>

          <h3 style="color: #111827; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-top: 35px; font-size: 18px; font-weight: 600;">Message / Details</h3>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap; border: 1px solid #f3f4f6;">${message || "No message provided."}</div>
        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 13px; margin: 0;">This is an automated notification from the PrimuxCare website.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "info@primuxcare.com", 
      subject: `New Sales Inquiry: ${organization || 'PrimuxCare'}`,
      html: htmlTemplate,
      text: `
        New Inquiry Received (PrimuxCare Website)
        -------------------------------------------
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
