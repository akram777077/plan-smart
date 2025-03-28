import { usePlan } from "../context/plan-params"

const handlePlanParamData = 
  (param: any): 
    {paramTitle: string, paramVal: string, paramPath: string} => 
{
  const {plan} = usePlan();
  
  if(param === "goal") {
    return {
      paramTitle: "Your Goal:",
      paramVal: plan.goal,
      paramPath: "goal"
    }
  };

  if(param === "time") {
    return {
      paramTitle: "Your Timeframe:",
      paramVal: String(plan.time),
      paramPath: "time"
    }
  }

  if(param === "subjects") {
    return {
      paramTitle: "Your Subjects:",
      paramVal: Array.from(plan.subjects).join(", "),
      paramPath: "subjects"
    }
  }

  return {
    paramTitle: "Your Challenges:",
    paramVal: Array.from(plan.challenges).join(", "),
    paramPath: "challenges"
  }
}

export default handlePlanParamData;