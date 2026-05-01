import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ status: "error", message: "Name, email and message are required." });
    }

    try {
      // Create a transporter
      // Note: In production, you'd use a real service like SendGrid, Mailgun, or a verified SMTP.
      // For Gmail, you'd need an App Password.
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'avani@mantraa.ae',
        subject: `New Enquiry from ${name} - ${service}`,
        text: `
          Name: ${name}
          Email: ${email}
          Service: ${service}
          Message: ${message}
        `,
        html: `
          <h3>New Enquiry Received</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Only attempt to send if credentials exist
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ status: "success", message: "Your message has been sent successfully!" });
      } else {
        console.warn("Email credentials missing. Logged enquiry:", { name, email, service, message });
        res.status(200).json({ 
          status: "success", 
          message: "Thank you for your enquiry! (Note: Server is currently in log-only mode. We have received your details.)" 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "error", message: "Failed to send message. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
