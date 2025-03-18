import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePlan } from "../../../context/plan-params";

type Params = {
  currentPlanParam: string; // Define the expected param type
};

const times = [
  {timeText: "1 Day", timeNumber: 1},
  {timeText: "3 Days", timeNumber: 3},
  {timeText: "5 Days", timeNumber: 5},
  {timeText: "1 Week", timeNumber: 7},
  {timeText: "2 Weeks", timeNumber: 14},
];

function NewPlanTime() {
  const { currentPlanParam } = useParams<Params>(); // Extracts the dynamic parameter
  const {plan, setPlan} = usePlan();

  return (
    <section 
      className="
      flex flex-col self-stretch items-center 
    bg-blue-gray py-7 px-5 gap-3 rounded-2xl
      "
    >
      <h3 
        className="grow mb-5 sm:mb-0 font-bold text-2xl text-primary-teal font-open-sans text-[16px]"
      >
        Step 2 of 4: Pick Your Time
      </h3>
      <p className="mb-5">
        How much time do you have? Choose a timeframe, and let the AI build a plan that fits.
      </p>

      <div className="space-y-2 sm:space-y-0 sm:space-x-2">

        {times.map(({timeText, timeNumber}) => (
          <button
            key={timeNumber}
            onClick={() => setPlan((prevPlan) => {return {...prevPlan, time: timeNumber}})}
            className={`
              px-6 py-1 text-lg font-medium border rounded-lg transition-all 
              ${
                timeNumber === plan.time ? 
                  "bg-primary-teal text-white shadow-lg" : 
                  "text-white border-2 border-primary-teal hover:bg-gray-700"
                }
              w-full sm:w-auto
            `}
          >
            {timeText}
          </button>
        ))}

      </div>

      <div 
        className="
          time-input-holder flex items-center 
          rounded-sm border-2 px-4 py-2
          focus-within:border-primary-teal
        "
      >
        <span className="prefix">Enter days: </span>
        <input 
          className="w-fit px-1 border-none outline-none" 
          onChange={(e) => setPlan((prevPlan) => {return {...prevPlan, time: parseInt(e.target.value)}})}
          type="number" 
          min="1" max="1000" placeholder="_ _ _ _"
        />
      </div>
    </section>
  )
}

export default NewPlanTime
