import { useEffect, useState } from "react";
import ButtonLink from "../components/links/button-link";
import { usePlan } from "../context/plan-params";
import { Link, useNavigate } from "react-router-dom";
import {generateNewPlan, savePlan} from "../services/plan-service";

function NewPlanReplay() {
  const {plan} = usePlan();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const handleSavePlan = async () => {
    if (!generatedPlan) return;
    setSaving(true);

    try {
      await savePlan(generatedPlan, plan); // Call the API to save the plan
      navigate("/plan-history"); // Redirect after successful save
    } catch (err) {
      setError("Failed to save the plan. Please try again.");
      console.error("Save Error:", err);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const fetchStudyPlan = async () => {
      try {
        setLoading(true);
        const generateResponse = await generateNewPlan(plan);
        setGeneratedPlan(generateResponse.data);
      } catch (err) {
        setError("Failed to generate the study plan. Please try again.");
        console.error("Error:", err);
        setTimeout(() => { navigate("/new-plan/review"); }, 3000);
        
      } finally {
        setLoading(false);
      }
    };

    fetchStudyPlan();
  }, []);

  return (
    <section className="px-1 rounded-sm bg-obsidian-shadow py-2 md:rounded-lg md:px-3">

      {
        loading ? (
          <h2 className="text-2xl text-center">Generating your study plan...</h2>
        ) :
        error ? (
          <section className="text-center space-y-4">
            <h2 className="text-2xl text-center">{error}</h2>
            <Link
              to="/"
              className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300"
            > Go Back Home </Link>
          </section>
        ) :
          <>
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
                <strong className="ml-3 text-primary-teal">Subjects:</strong> {Array.from(plan.subjects).join(", ")} | 
                <strong className="ml-3 text-primary-teal">Challengs:</strong> {Array.from(plan.challenges).join(", ")} 
              </div>
            </section>

            <section className="mb-3 space-y-2">
              <h3 className="text-md md:text-lg font-bold grow p-2 bg-shadow-blue rounded-md">
              {generatedPlan.title} </h3>

              <div className="plan-response">
                {generatedPlan.plan.map((day: any, index: number) => (
                  <div key={index} className="p-3 border rounded-md shadow-sm mb-3">
                    <h4 className="text-lg font-semibold">Day {index + 1}</h4>
                    <p className="text-sm italic">{day.summary}</p>
                    <ul className="mt-2 list-disc list-inside">
                      {day.tasks.map((task: any, taskIndex: number) => (
                        <li key={taskIndex}>
                          <strong>{task.subject}:</strong> {task.topic} ({task.duration})
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </section>

            <div className="links-holder flex justify-center items-center gap-1 sm:gap-3">
              <ButtonLink hasBGColor={false} text="Cancel" link="/plan-history" />
              <ButtonLink hasBGColor={false}  text="Start Over" link="/new-plan/goal" />
              <button
                onClick={handleSavePlan}
                disabled={saving || !generatedPlan}
                className="
                  border border-deep-teal relative py-2 px-5 bg-deep-teal rounded-md
                   text-white disabled:opacity-50
                  "
              >
                {saving ? "Plan is saving..." : "Save Plan"}
              </button>
            </div>

          </>


      }


    </section>
  )
}

export default NewPlanReplay
