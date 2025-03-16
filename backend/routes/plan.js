const express = require('express');
const Plan = require('../models/plan');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { userId, goal, timeframe, subjects, challenges, planResponse } = req.body;

        if (!userId || !goal || !timeframe || !subjects || !challenges || !planResponse) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newPlan = new Plan({
            userId,
            goal,
            timeframe,
            subjects,
            challenges,
            planResponse
        });

        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(500).json({ error: "Error saving plan" });
    }
});


router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const plans = await Plan.find({ userId });

        if (!plans.length) {
            return res.status(404).json({ message: "No plans found for this user" });
        }

        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ error: "Error fetching plans" });
    }
});

module.exports = router;
