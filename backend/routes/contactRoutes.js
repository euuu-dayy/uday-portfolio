const express = require("express")

const router = express.Router()

const nodemailer = require("nodemailer")

router.post("/", async (req, res) => {

  try {

    const {
      name,
      email,
      company,
      message,
    } = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

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
    }

    await transporter.sendMail(mailOptions)

    res.json({
      message: "Message sent successfully.",
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Failed to send message.",
    })
  }
})

module.exports = router