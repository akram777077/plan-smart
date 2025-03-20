const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config();

const router = express.Router();
const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_API_KEY
});

router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message parameter is required." });
        }

        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are a concise AI. Respond briefly and directly, no long explanations." },
                { role: "user", content: message }
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens: 100,  // Limits response length
            top_p: 1
        });

        let chatGptResponse = response.choices[0].message.content.trim();
        res.json({ message: chatGptResponse });
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Failed to generate a response." });
    }
});

module.exports = router;
