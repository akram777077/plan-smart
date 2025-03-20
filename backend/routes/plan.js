const express = require('express');
const Plan = require('../models/plan');

const router = express.Router();

// Create a new plan TODO: is not a create process it's saving.
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
        const plans = await Plan.getPlanTitleAndTimeframeByUserId(userId);

        if (!plans || plans.length === 0) {
            return res.status(404).json({ message: "No plans found for this user" });
        }

        res.status(200).json(plans);
    } catch (error) {
        console.error("Error fetching plans:", error);
        res.status(500).json({ error: "Error fetching plans" });
    }
});

router.get('/:planId', async (req, res) => {
    try {
        const { planId } = req.params;
        const plan = await Plan.findById(planId);

        if (!plan) {
            return res.status(404).json({ message: "Plan not found" });
        }

        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ error: "Error fetching plan" });
    }
});

module.exports = router;
