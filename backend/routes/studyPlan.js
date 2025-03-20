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
            return res.status(400)
                .json({ error: "All parameters (goal, timeframe, subjects, challenges) are required." });
        }

        let timeframeValue = parseInt(timeframe, 10);
        if (isNaN(timeframeValue) || timeframeValue <= 0) {
            return res.status(400).json({ error: "Timeframe must be a positive number representing days." });
        }

        let timeframeUnit;
        if (timeframeValue <= 7) {
            timeframeUnit = "days";
        } else if (timeframeValue <= 90) {
            timeframeUnit = "weeks";
            timeframeValue = Math.ceil(timeframeValue / 7);
        } else {
            timeframeUnit = "months";
            timeframeValue = Math.ceil(timeframeValue / 30);
        }

        const prompt = `
        Create a structured study plan in valid JSON format for a student with the goal of '${goal}'.
        The student has ${timeframeValue} ${timeframeUnit} to study.
        The subjects they need help with are: ${subjects.join(', ')}.
        Their main challenges are: ${challenges.join(', ')}.

        **Output Only JSON** with this structure:
        {
          "title": "A concise and relevant title summarizing the study plan",
          "timeframe":${timeframeUnit}",
          "plan": [
            {
              "tasks": [
                {"subject": "Math", "topic": "Algebra Basics", "duration": "2 hours"},
                {"subject": "Physics", "topic": "Newton's Laws", "duration": "1.5 hours"}
              ],
              "summary": "Focus on fundamental algebra and physics concepts."
            }
          ],
          "end": "End of Study Plan"
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
