const express = require("express");

const router = express.Router();

const axios = require("axios");

const resumeContext = require("../ai/resumeContext");

router.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
${resumeContext}

Guidelines:
- Answer professionally.
- Keep responses concise but informative.
- Answer ONLY from provided context.
- Do not hallucinate.
- Respond like a professional AI recruiter assistant.
`,
          },

          {
            role: "user",
            content: question,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.json({
      reply: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI error",
    });
  }
});

module.exports = router;
