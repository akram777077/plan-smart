import { usePlan } from "../../../context/plan-params";

const subjects = [
  "Math","Science","History","Geology","Economics",
  "Engineering","Biology","Geography","Algebra","Psychology",
  "Robotics","Physics","Literature","Calculus","Languages"
];

function NewPlanSubjects() {
  const {plan, setPlan} = usePlan();

  const handleSubjectClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const subject = e.currentTarget.textContent as string;
    if(plan.subjects.has(subject)) {
      setPlan((prevPlan) => {
        const newSubjectsSet = prevPlan.subjects;
        newSubjectsSet.delete(subject);
        return {...prevPlan, subjects: newSubjectsSet};
      });
    } else {
      setPlan((prevPlan) => {return {...prevPlan, subjects: prevPlan.subjects.add(subject)}});
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
        Step 3 of 4: Choose Your Subjects
      </h3>
      <p className="mb-5">
        What are you studying? Pick a subject(s) own—PlanSmart AI has you covered. 
      </p>

      <div className="space-y-2 sm:space-x-2">

        {subjects.map((subjectName) => (
          <button
            key={subjectName}
            
            onClick={handleSubjectClick}
            className={`
              px-6 py-3 text-lg font-medium border rounded-lg transition-all 
              ${
                plan.subjects.has(subjectName) ? 
                  "bg-primary-teal text-white shadow-lg" : 
                  "text-white border-2 border-primary-teal hover:bg-gray-700"
                }
              w-full sm:w-auto
            `}
          >
            {subjectName}
          </button>
        ))}

      </div>
    </section>
  )
}

export default NewPlanSubjects
