import { usePlan } from "../../../context/plan-params";

const challenges = [
  "Memorizing", "Understanding Concepts","Time Management","Motivation",
  "Test Anxiety","Focus Issues","Note-Taking","Comprehension", "Less Exercises"
];

function NewPlanChallenges() {
  const {plan, setPlan} = usePlan();

  const handleChallengeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const challenge = e.currentTarget.textContent as string;
    if(plan.challenges.has(challenge)) {
      setPlan((prevPlan) => {
        const newChallengesSet = prevPlan.challenges;
        newChallengesSet.delete(challenge);
        return {...prevPlan, challenges: newChallengesSet};
      });
    } else {
      setPlan((prevPlan) => {
        return {...prevPlan, challenges: prevPlan.challenges.add(challenge)}
      });
    }

  };

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
        Step 4 of 4: challenges Your Challenges
      </h3>
      <p className="mb-5">
        Where do you struggle? Select your hurdles, and let the AI craft solutions just for you.
      </p>

      <div className="space-y-2 sm:space-x-2">

        {challenges.map((challengeText) => (
          <button
            key={challengeText}
            onClick={handleChallengeClick}
            className={`
              px-6 py-3 text-lg font-medium border rounded-lg transition-all 
              ${
                plan.challenges.has(challengeText) ?
                  "bg-primary-teal text-white shadow-lg" : 
                  "text-white border-2 border-primary-teal hover:bg-gray-700"
                }
              w-full sm:w-auto
            `}
          >
            {challengeText}
          </button>
        ))}

      </div>
    </section>
  )
}

export default NewPlanChallenges
