import NewPlanGoal from "../components/pages/new-plan/PlanGoal";

const detectCurrentComponent = (currentParam: string) => {
  switch(currentParam) {
    case "time": return "It Coming 🔥"
    case "subject": return "It Coming 🔥"
    case "pinpoint": return "It Coming 🔥"
    default: return <NewPlanGoal />;
  };
};

export default detectCurrentComponent;