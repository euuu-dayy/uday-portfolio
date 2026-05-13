const express = require("express")

const router = express.Router()

const Resume = require("../models/Resume")

/* =========================
   GET RESUME
========================= */

router.get("/", async (req, res) => {

  try {

    const resume = await Resume.findOne()

    res.json(resume)

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch resume",
    })
  }
})

/* =========================
   UPDATE RESUME
========================= */

router.post("/update", async (req, res) => {

  try {

    const {
      password,
      resumeLink,
    } = req.body

    /* VERIFY PASSWORD */

    if (
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        message: "Invalid password",
      })
    }

    let resume = await Resume.findOne()

    if (!resume) {

      resume = new Resume({
        resumeLink,
      })

    } else {

      resume.resumeLink = resumeLink
    }

    await resume.save()

    res.json({
      message: "Resume updated successfully",
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Failed to update resume",
    })
  }
})

module.exports = router