import { Plan } from "../../pages/plan-history/models/plan"

interface PlanHistoryMainProps {
  plan: Plan;
}

const PlanHistoryMain = ({ plan }: PlanHistoryMainProps) => {
  return (
    <main className="flex-1 p-6 bg-[#181A1E]">
      <div className="max-w-3xl mx-auto bg-[#1E2025] border border-[#1E2025] rounded-2xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-white font-['Albert_Sans',_Helvetica,_sans-serif] mb-6">Your Smart Plan Is Ready!</h1>

        <h2 className="text-xl font-semibold text-white font-['Albert_Sans',_Helvetica,_sans-serif] mb-4">Quick Recap</h2>
        <p className="text-[#B0B4B9] mb-4">
          Preparing for the upcoming {plan.name.toLowerCase()} with focus on key topics.
        </p>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-white font-['Albert_Sans',_Helvetica,_sans-serif] mb-2">Goal</h3>
          <p className="text-[#B0B4B9]">{plan.goal}</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-base font-semibold text-white font-['Albert_Sans',_Helvetica,_sans-serif]">Progress</h3>
            <span className="text-primary-teal">{plan.progress}% Complete</span>
          </div>
          <div className="w-full bg-[#181A1E] rounded-lg h-2">
            <div 
              className="bg-primary-teal h-2 rounded-lg" 
              style={{ width: `${plan.progress}%` }}
            ></div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-white font-['Albert_Sans',_Helvetica,_sans-serif] mb-3">Daily Plan</h3>
          {plan.tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-2 mb-2">
              <input 
                type="checkbox" 
                checked={task.completed}
                className="w-4 h-4 bg-[#1E2025] border-2 border-primary-teal rounded"
                // This should be interactive - toggle task completion
                // onChange={() => handleTaskToggle(task.id)} will be implemented by frontend dev
              />
              <span className="text-[#B0B4B9]">{task.description}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PlanHistoryMain;