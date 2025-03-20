import PlanParamsType from "../types/plan-param-type";

const detectNextRoute = (currentParam: PlanParamsType, mode: string | null) => {
  if (mode === "edit") return "/new-plan/review";

  switch(currentParam) {
    case "goal": return "/new-plan/time"
    case "time": return "/new-plan/subjects"
    case "subjects": return "/new-plan/challenges"
    case "challenges": return "/new-plan/review"
    default: return "/new-plan/goal";
  };
};

export default detectNextRoute;