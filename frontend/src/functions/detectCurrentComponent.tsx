import NewPlanChallenges from "../components/pages/new-plan/plan-challenges";
import NewPlanGoal from "../components/pages/new-plan/plan-goal";
import NewPlanSubjects from "../components/pages/new-plan/plan-subjects";
import NewPlanTime from "../components/pages/new-plan/plan-time";
import PlanParamsType from "../types/plan-param-type";

const detectCurrentComponent = (currentParam: PlanParamsType) => {
  switch(currentParam) {
    case "time": return <NewPlanTime/>
    case "subjects": return <NewPlanSubjects/>
    case "challenges": return <NewPlanChallenges/>
    default: return <NewPlanGoal />;
  };
};

export default detectCurrentComponent;