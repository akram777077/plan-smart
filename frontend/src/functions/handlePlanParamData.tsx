import { usePlan } from "../context/plan-params"

const handlePlanParamData = 
  (param: any): 
    {paramTitle: string, paramVal: string, paramPath: string} => 
{
  const {plan} = usePlan();

  console.log(plan)
  
  if(param === "goal") {
    return {
      paramTitle: "Your Goal:",
      paramVal: plan.goal,
      paramPath: "/new-plan/goal"
    }
  };

  if(param === "time") {
    return {
      paramTitle: "Your Timeframe:",
      paramVal: String(plan.time),
      paramPath: "/new-plan/time"
    }
  }

  if(param === "subjects") {
    return {
      paramTitle: "Your Subjects:",
      paramVal: Array.from(plan.subjects).join(", "),
      paramPath: "/new-plan/subjects"
    }
  }

  return {
    paramTitle: "Your Challenges:",
    paramVal: Array.from(plan.challenges).join(", "),
    paramPath: "/new-plan/challenges"
  }
}

export default handlePlanParamData;