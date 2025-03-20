import { Link, useParams, useSearchParams } from "react-router-dom";
import ButtonLink from "../components/links/button-link"
import detectNextRoute from "../functions/detectNextRoute"
import detectCurrentComponent from "../functions/detectCurrentComponent";

import { usePlan } from "../context/plan-params";
import PlanParamsType from "../types/plan-param-type";
import isPlanParamValValid from "../functions/isPlanParamValValid";
import determineText from "../functions/determineText";

type Params = {
  currentPlanParam: PlanParamsType; // Define the expected param type
};

function NewPlanLayout() {
  const { currentPlanParam } = useParams<Params>(); // Extracts the dynamic parameter
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const { plan } = usePlan();

  return (
    <section className="h-dvh md:py-5 md:px-8">
      <header className="text-center sm:text-start sm:flex items-center gap-4 mb-5">
        <h2 className="grow mb-5 sm:mb-0 font-bold text-3xl text-primary-teal">Build Your Smart Plan</h2>
        <Link className="py-2 px-5 mr-5 border border-red-700 rounded-md" to="/home">Cancel Plan</Link>
        <ButtonLink 
          text={determineText(mode)} 
          link={detectNextRoute(currentPlanParam as PlanParamsType, mode)}
          isActive={isPlanParamValValid(currentPlanParam as PlanParamsType, plan)}
        />
      </header>
      <div className="p-10">
        {detectCurrentComponent(currentPlanParam as PlanParamsType)}
      </div>
    </section>
  )
}

export default NewPlanLayout
