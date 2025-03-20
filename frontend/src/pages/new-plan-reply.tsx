import ButtonLink from "../components/links/button-link";
import { usePlan } from "../context/plan-params";
import handlePlanParamData from "../functions/handlePlanParamData";

function NewPlanReplay() {
  const {plan, setPlan} = usePlan();



  return (
    <section className="px-1 rounded-sm bg-obsidian-shadow py-2 md:rounded-lg md:px-3">

      <header className="mb-3 text-center space-y-2">
        <h2 className="text-xl md:text-2xl grow p-2 bg-shadow-blue rounded-md">
          YOUR SMART PLAN IS READY!
        </h2>
        <p>Here’s your personalized plan to ace your goals with PlanSmart AI.</p>
      </header>

      <section className="mb-3 space-y-2">
        <h3 className="text-md md:text-lg font-bold grow p-2 bg-shadow-blue rounded-md">
          Quick Recap: </h3>
        <div className="plan-params">
          <strong className="text-primary-teal">Goal:</strong> {plan.goal} | 
          <strong className="ml-3 text-primary-teal">Timeframe:</strong> {plan.time} | 
          <strong className="ml-3 text-primary-teal">Subjects:</strong> {plan.subjects} | 
          <strong className="ml-3 text-primary-teal">Challengs:</strong> {plan.challenges} 
        </div>
      </section>

      <section className="mb-3 space-y-2">
        <h3 className="text-md md:text-lg font-bold grow p-2 bg-shadow-blue rounded-md">
          Your Plan: </h3>
        <div className="plan-response">
          PLAN RESPONSE...
        </div>
      </section>

      <div className="links-holder flex justify-center items-center gap-1 sm:gap-3">
        <ButtonLink hasBGColor={false} text="Cancel" link="/plan-history" />
        <ButtonLink hasBGColor={false}  text="Start Over" link="/new-plan/goal" />
        <ButtonLink text="Finish" link="/plan-history" />
      </div>

    </section>
  )
}

export default NewPlanReplay
