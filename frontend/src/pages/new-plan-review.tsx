import { usePlan } from "../context/plan-params";
import NewPlanParamsInfo from "../components/pages/new-plan-review.tsx/new-plan-param-info";
import handlePlanParamData from "../functions/handlePlanParamData";
import ButtonLink from "../components/links/button-link";
import { Link } from "react-router-dom";

function NewPlanReview() {
  const { plan } = usePlan();

  return (
    <section className="h-dvh md:py-5 md:px-8">
      <header className="text-center sm:text-start gap-4 mb-5">
        <h2 className="grow mb-2 font-bold text-3xl text-primary-teal">Review Your Smart Plan</h2>
        <p className="mb-5">
          Check your choices below and tweak them if needed. 
          Ready to let PlanSmart AI create your perfect plan?
        </p>
      </header>

      <div 
        className="
          flex flex-wrap justify-between
          p-5
        "
      >
        {
          Object.keys(plan).map(
            (param) => {
              const {paramTitle, paramVal, paramPath} = handlePlanParamData(param);

              return <NewPlanParamsInfo 
                  key={paramTitle}
                  paramTitle={paramTitle} paramVal={paramVal} paramPath={paramPath} 
                />
            }
          )
        }
      </div>

      <div className="link-holder flex justify-center items-center gap-1 sm:gap-3">
        <Link 
          className="py-2 px-5 rounded-md border border-red-500" 
          to="/plan-history"
        >Cancel</Link>       
        <ButtonLink text="Build Your Plan" link="/new-plan-replay" />
      </div>
    </section>
)
}

export default NewPlanReview
