import axios from "axios";
import PlanType from "../types/plan-type";
import userId from "../static-data";

const generateNewPlan = async ({goal, time, subjects, challenges}: PlanType) => {
  // First API Call: Generate Study Plan
  return await axios.post("http://localhost:3000/studyPlan/generate-plan", {
    goal: goal,
    timeframe: String(time),
    subjects: Array.from(subjects), 
    challenges:  Array.from(challenges),
  });
};

const savePlan = async (generatedPlan: any, {goal, time, subjects, challenges}: PlanType) => {
  return await axios.post("http://localhost:3000/plan", {
    userId: "67da67c3b36d166234a7a386", // Hardcoded for now
    goal: goal,
    timeframe: String(time),
    subjects: Array.from(subjects), 
    challenges:  Array.from(challenges),
    planResponse: generatedPlan
  });
};

const getUserPlans = async () => {
  return await axios.get(`http://localhost:3000/plan/user/${userId}`);
};

const getPlanDetails = async (planId: string) => {
  return await axios.get(`http://localhost:3000/plan/${planId}`);
};

export { generateNewPlan, savePlan, getUserPlans, getPlanDetails };
// TODO: Compare this snippet from src/types/plan-type.ts.