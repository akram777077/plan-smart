const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config();

const router = express.Router();
const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: process.env.GITHUB_API_KEY
});
router.post('/generate-plan', async (req, res) => {
    try {
        const { goal, timeframe, subjects, challenges } = req.body;

        if (!goal || !timeframe || !subjects || !challenges) {
            return res.status(400).json({ error: "All parameters (goal, timeframe, subjects, challenges) are required." });
        }

        let timeframeUnit, timeframeValue;
        const time = timeframe.toLowerCase();

        if (time.includes("month")) {
            const months = parseInt(time.replace(/\D/g, ""), 10) || 1;
            timeframeUnit = months <= 3 ? "weeks" : "months";
            timeframeValue = months <= 3 ? months * 4 : months;
        } else if (time.includes("week")) {
            const weeks = parseInt(time.replace(/\D/g, ""), 10) || 1;
            timeframeUnit = weeks <= 4 ? "days" : "weeks";
            timeframeValue = weeks <= 4 ? weeks * 7 : weeks;
        } else if (time.includes("day")) {
            const days = parseInt(time.replace(/\D/g, ""), 10) || 1;
            timeframeUnit = "days";
            timeframeValue = days;
        } else {
            return res.status(400).json({ error: "Invalid timeframe format. Use days, weeks, or months." });
        }

        const prompt = `
        Create a structured study plan in valid JSON format for a student with the goal of '${goal}'.
        The student has ${timeframeValue} ${timeframeUnit} to study.
        The subjects they need help with are: ${subjects.join(', ')}.
        Their main challenges are: ${challenges.join(', ')}.

        **Output Only JSON** with this structure:
        {
          "plan": [
            {
              "${timeframeUnit.slice(0, -1)}": 1,
              "tasks": [
                {"subject": "Math", "topic": "Algebra Basics", "duration": "2 hours"},
                {"subject": "Physics", "topic": "Newton's Laws", "duration": "1.5 hours"}
              ],
              "summary": "Focus on fundamental algebra and physics concepts."
            }
          ]
        }
        
        No explanations, no extra text. **Only JSON.**
        `;

        const response = await client.chat.completions.create({
            messages: [
                { role: "system", content: "You are an AI that generates structured study plans in JSON format." },
                { role: "user", content: prompt }
            ],
            model: "gpt-4o",
            temperature: 1,
            max_tokens: 4096,
            top_p: 1
        });

        let chatGptResponse = response.choices[0].message.content;

        const jsonMatch = chatGptResponse.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error("No valid JSON found in response.");
        }

        const cleanJson = JSON.parse(jsonMatch[0]);

        res.json(cleanJson);
    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Failed to generate a valid study plan." });
    }
});


module.exports = router;
