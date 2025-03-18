// plan-history.tsx
import { useState } from 'react';
import { Plan } from "../components/pages/plan-history/models/plan";
import PlanHistoryHeader from "../components/pages/plan-history/history-header";
import PlanHistorySidebar from "../components/pages/plan-history/history-left-sidebar";
import PlanHistoryMain from "../components/pages/plan-history/history-body";
import PlanHistoryRightSidebar from "../components/pages/plan-history/history-right-sidebar";
import PlanHistoryFooter from "../components/pages/plan-history/history-footer";
import { samplePlans } from "../components/pages/plan-history/data/samplePlans";

interface PlanHistoryProps {
  // Optional prop to allow passing plans from parent component
  initialPlans?: Plan[];
}

const PlanHistory = ({ initialPlans = samplePlans }: PlanHistoryProps) => {
  // Define state for the selected plan
  const [plans] = useState<Plan[]>(initialPlans);
  const [selectedPlanId, setSelectedPlanId] = useState<string>(plans[0]?.id || '');
  
  // Find the selected plan or default to the first one
  const selectedPlan = plans.find(p => p.id === selectedPlanId) || plans[0];
  
  return (
    <div className="min-h-screen bg-[#181A1E] flex flex-col font-['Actor',_Helvetica,_sans-serif]">
      <PlanHistoryHeader />
      
      <div className="flex flex-1">
        {/* Pass plans and selectedPlanId to sidebar */}
        <PlanHistorySidebar 
          plans={plans} 
          selectedPlanId={selectedPlanId} 
          onSelectPlan={(id) => setSelectedPlanId(id)}
        />
        
        {/* Pass the selected plan to main content */}
        <PlanHistoryMain plan={selectedPlan} />
        
        {/* Pass the selected plan to right sidebar */}
        <PlanHistoryRightSidebar plan={selectedPlan} />
      </div>
      
      <PlanHistoryFooter />
    </div>
  );
};

export default PlanHistory;