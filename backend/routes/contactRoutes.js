const express = require("express");

const router = express.Router();

const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    /* DEBUG ENV */

    console.log("EMAIL USER:", process.env.EMAIL_USER);

    console.log("EMAIL PASS EXISTS:", !!process.env.EMAIL_PASS);

    /* CREATE TRANSPORTER */

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",

      port: 587,

      secure: false,

      family: 4,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      tls: {
        rejectUnauthorized: false,
      },
    });

    /* MAIL OPTIONS */

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Portfolio Message from ${name}`,

      html: `
      
      <div style="
        font-family: Arial;
        padding: 20px;
        background: #0f172a;
        color: white;
      ">

        <h2 style="color:#00d9ff;">
          New Portfolio Contact
        </h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Company:</strong> ${company}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <div style="
          background:#111827;
          padding:15px;
          border-radius:10px;
        ">
          ${message}
        </div>

      </div>
      `,
    };

    /* SEND EMAIL */

    await transporter.sendMail(mailOptions);

    console.log("EMAIL SENT SUCCESSFULLY");

    res.json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.log("FULL EMAIL ERROR:");

    console.log(error);

    console.log(error.message);

    res.status(500).json({
      message: "Failed to send message.",
    });
  }
});

module.exports = router;
