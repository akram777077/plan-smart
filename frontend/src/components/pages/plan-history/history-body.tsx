interface PlanHistoryMainProps {
  selectedPlanData: any;
}

const PlanHistoryMain = ({ selectedPlanData }: PlanHistoryMainProps) => {
  const planDetails = selectedPlanData?.planResponse;

  return (
    <main className="flex-1 p-6 bg-[#181A1E]">
      {
        !selectedPlanData ? 
          <h2>Choose a selectedPlanData or create one</h2>
        :

        <section className="mb-3 space-y-2">
          <h3 className="text-md md:text-lg font-bold grow p-2 bg-shadow-blue rounded-md">
            {planDetails.title} 
          </h3>

          <div className="plan-response">
            {planDetails.plan.map((day: any, index: number) => (
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


      }
    </main>
  );
};

export default PlanHistoryMain;