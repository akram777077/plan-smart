import { Navigate, useParams } from "react-router-dom";
import NewPlanLayout from "../pages/new-plan-layout";
import PlanType from "../types/plan-type";
import PlanParamsType from "../types/plan-param-type";

const PlanRouteGuard = () => {
  const { currentPlanParam } = useParams<{ currentPlanParam?: string }>();

  // Define allowed keys
  const validSteps: PlanParamsType[] = ["goal", "subjects", "time", "challenges"];

  return validSteps.includes(currentPlanParam as keyof PlanType) ? (
    <NewPlanLayout />
  ) : (
    <Navigate to="/new-plan/goal" replace />
  );
};

export default PlanRouteGuard;

