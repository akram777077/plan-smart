const mongoose = require('mongoose');


const planSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    goal: { type: String, required: true },
    timeframe: { type: String, required: true },
    subjects: { type: [String], required: true },
    challenges: { type: [String], required: true },
    planResponse: { type: Object, required: true }
});


planSchema.statics.getAllPlansByUserId = async function (userId) {
    return await this.find({ userId });
};

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
