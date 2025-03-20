// plan-history-sidebar.tsx
import checkmark from "/assets/svg/checkmark.svg"
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import startOver from "/assets/svg/refresh.svg"

interface PlanHistorySidebarProps {
  plans: any;
  selectedPlanId: string | null;
  onSelectPlan: (id: string) => void;
}

const PlanHistorySidebar = ({ plans, selectedPlanId, onSelectPlan }: PlanHistorySidebarProps) => {
  console.log("selectedPlanId", selectedPlanId);
  console.log("plans", plans);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planId = queryParams.get('plan-id'); // Extracts the plan-id from query string
  
  return (
    <aside className="w-1/4 bg-[#181A1E] border-r border-[#1E2025] p-4">
      {/* <div className="relative mb-4">
      <img src={search} alt="Search" className="absolute left-3 top-2.5 w-4 h-4 text-[#B0B4B9]" />
      
        <input
          type="text"
          placeholder="Search chats and plans..."
          className="w-full py-2 pl-10 pr-3 bg-[#1E2025] border border-[#1E2025] rounded-lg text-[#B0B4B9] text-sm outline-none"
            This should be interactive
          onChange={handleSearch} should be implemented 
        />
      </div> */}
 
      <div className="flex flex-col gap-4">
        {/* <div>
          <h2 className="text-base font-semibold text-[#B0B4B9] font-['Albert_Sans',_Helvetica,_sans-serif] flex items-center gap-2 mb-3">
          <img src={messages} alt="Chat History" className="w-5 h-5" /> Chat History
          </h2>
          <div className="flex flex-col gap-2">
            {chats.map((chat) => (
              <div 
                key={chat.id} 
                className="p-3 bg-[#1E2025] rounded-lg cursor-pointer"
                // onClick={() => handleChatSelect(chat.id)} will be implemented
              >
                <div className="text-sm font-medium text-white">{chat.name}</div>
                <div className="text-xs text-[#B0B4B9]">{chat.date}</div>
              </div>
            ))}
          </div>
        </div> */}

        <div>
          <Link 
            to="/new-plan/goal"
            className="mb-3 md:hidden w-full flex items-center justify-center gap-2 p-2 bg-transparent text-primary-teal border border-primary-teal rounded-lg cursor-pointer transition-colors hover:bg-[#1E2025]">
            <img src={startOver} alt="Start Over" className="w-4 h-4" /> Build a new plan
          </Link>
          <h2 className="text-base font-semibold text-[#B0B4B9] font-['Albert_Sans',_Helvetica,_sans-serif] flex items-center gap-2 mb-3">
          <img src={checkmark} alt="Plan History" className="w-5 h-5" /> Plan History
          </h2>
          <div className="flex flex-col gap-2">
            {plans.map((plan: any) => (
              <div 
                key={plan.id} 
                className={`p-3 bg-[#1E2025] rounded-lg cursor-pointer ${planId === plan.id ? 'border border-primary-teal' : ''}`}
                // This should be interactive - clicking selects the plan
                onClick={() => {
                  navigate(`/plan-history?plan-id=${plan.id}`)
                }}
              >
                <div className="text-sm font-medium text-white">{plan.title}</div>
                {/* <div className="text-xs text-[#B0B4B9]">Completed {plan.completedDate}</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PlanHistorySidebar;