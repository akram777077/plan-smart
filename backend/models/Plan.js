const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    goal: { type: String, required: true },
    timeframe: { type: String, required: true },
    subjects: { type: [String], required: true },
    challenges: { type: [String], required: true },
    planResponse: { type: Object, required: true }
}, { timestamps: true });

// Method to get all plans by userId
planSchema.statics.getAllPlansByUserId = async function (userId) {
    return await this.find({ userId });
};

// Method to get title and timeframe of plans by userId
planSchema.statics.getPlanTitleAndTimeframeByUserId = async function (userId) {
    const plans = await this.find({ userId }, 'planResponse.title createdAt');

    return plans.map(plan => ({
        id : plan.id,
        title: plan.planResponse?.title || "No title available",
        createdAt: plan.createdAt
    }));
};

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
