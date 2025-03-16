import { useState } from "react";
import { useParams } from "react-router-dom";

type Params = {
  currentStep: string; // Define the expected param type
};

const goals = ["Study Tips", "Study Schedule", "Exam Prep"];

function NewPlanGoal() {
  const { currentStep } = useParams<Params>(); // Extracts the dynamic parameter
  const [currGoal, setCurrGoal] = useState("");

  return (
    <section className="flex flex-col self-stretch items-center bg-blue-gray py-7 px-5 gap-3">
      <h3 
        className="grow mb-5 sm:mb-0 font-bold text-2xl text-primary-teal font-open-sans text-[16px]"
      >
        Step 1 of 4: Set Your Goal
      </h3>
      <p className="mb-5">
        Tell PlanSmart AI what you want to achieve—whether it’s a study schedule, 
        exam prep, or killer study tips.
      </p>

      <div className="space-y-2 sm:space-y-0 sm:space-x-2">

        {goals.map((goal) => (
          <button
            key={goal}
            onClick={() => setCurrGoal(goal)}
            className={`
              px-6 py-3 text-lg font-medium border rounded-lg transition-all 
              ${
                currGoal === goal ? 
                  "bg-primary-teal text-white shadow-lg" : 
                  "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              w-full sm:w-auto
            `}
          >
            {goal}
          </button>
        ))}

      </div>
    </section>
  )
}

export default NewPlanGoal
