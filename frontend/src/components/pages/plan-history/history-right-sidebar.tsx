// plan-history-right-sidebar.tsx
import { Plan } from "../../pages/plan-history/models/plan"
import share from "/assets/svg/share.svg"
import download from "/assets/svg/download.svg"
import startOver from "/assets/svg/refresh.svg"
import { Link } from "react-router-dom";

interface PlanHistoryRightSidebarProps {
  plan: Plan;
}

const PlanHistoryRightSidebar = ({ plan }: PlanHistoryRightSidebarProps) => {
  return (
    <aside className="w-1/5 bg-[#181A1E] border-l border-[#1E2025] p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#B0B4B9] font-['Albert_Sans',_Helvetica,_sans-serif] mb-3">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            <button 
              className="w-full flex items-center justify-center gap-2 p-2 bg-[#054E44] text-white rounded-lg border-none cursor-pointer transition-colors hover:bg-[#043B34]"
              // This should be interactive - share functionality
              // onClick={handleShare} should be implemented 
            >
              <img src={share} alt="Share Plan" className="w-4 h-4" /> Share Plan
            </button>
            <button 
              className="w-full flex items-center justify-center gap-2 p-2 bg-transparent text-primary-teal border border-primary-teal rounded-lg cursor-pointer transition-colors hover:bg-[#1E2025]"
              // This should be interactive - export functionality
              // onClick={handleExport} should be implemented 
            >
              <img src={download} alt="Download" className="w-4 h-4" /> Export Results
            </button>
            <Link 
            //This link navigates to the new plan page to start creating a new plan
              to="/new-plan/goal"
              className="w-full flex items-center justify-center gap-2 p-2 bg-transparent text-primary-teal border border-primary-teal rounded-lg cursor-pointer transition-colors hover:bg-[#1E2025]">
              <img src={startOver} alt="Start Over" className="w-4 h-4" /> Start Over
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#B0B4B9] font-['Albert_Sans',_Helvetica,_sans-serif] mb-3">Plan Results</h2>
          <div className="p-3 bg-[#1E2025] rounded-lg border border-[#1E2025]">
            <div className="text-sm font-medium text-white">{plan.name}</div>
            <div className="text-xs text-primary-teal">{plan.progress}% success rate</div>
            <div className="text-xs text-[#B0B4B9]">Completed {plan.completedDate}</div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-[#B0B4B9] font-['Albert_Sans',_Helvetica,_sans-serif] mb-3">Tips</h2>
          <div className="text-xs text-[#B0B4B9]">
            <p>💡 Take a 5-minute break every 25 minutes</p>
            <p>💡 Review your notes before bedtime</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PlanHistoryRightSidebar;