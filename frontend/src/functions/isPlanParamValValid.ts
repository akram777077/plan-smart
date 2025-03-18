import PlanParamsType from "../types/plan-param-type";
import PlanType from "../types/plan-type";

const isPlanParamValValid = (planParams: PlanParamsType, planData: PlanType) => {
  if(planParams === "time")
    return planData[planParams] > 0;

  if(planParams === "goal")
    return planData[planParams].length > 0;  

  return planData[planParams].size > 0;
};

export default isPlanParamValValid;
