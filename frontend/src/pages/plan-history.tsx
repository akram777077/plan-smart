// plan-history.tsx
import { useEffect, useState } from 'react';
import { Plan } from "../components/pages/plan-history/models/plan";
import PlanHistoryHeader from "../components/pages/plan-history/history-header";
import PlanHistorySidebar from "../components/pages/plan-history/history-left-sidebar";
import PlanHistoryMain from "../components/pages/plan-history/history-body";
import PlanHistoryRightSidebar from "../components/pages/plan-history/history-right-sidebar";
import PlanHistoryFooter from "../components/pages/plan-history/history-footer";
import { useLocation, useNavigate } from 'react-router-dom';
import { getPlanDetails, getUserPlans } from '../services/plan-service';



const PlanHistory = () => {
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null);
  const [userPlans, setUserPlans] = useState([]);
  const [selectedPlanData, setSelectedPlanData] = useState<null | Plan>(null);
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planId = queryParams.get('plan-id'); // Extracts the plan-id from query string

  
  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        setLoading(true);
        const res = await getUserPlans();
        console.log(res);
        const plans = res.data;
        setUserPlans(plans);

        // If there's no selected plan, set the first plan in the URL
        if (plans.length > 0 && !planId) {
          navigate(`/plan-history?plan-id=${plans[0].id}`);
        }
      } catch (err) {
        setError("Failed to get the user plans. Please try again.");
        console.error("Error:", err);        
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlans();
  }, []);

  useEffect(() => {
    console.log("GET ONE PLAN DATA IS WORKING...");
    
    if (planId) {
      const fetchPlanDetails = async () => {
        try {
          const planDetails = await getPlanDetails(planId);
          console.log("plan data", planDetails);
          setSelectedPlanData(planDetails.data);
        } catch (err) {
          setError("Failed to fetch plan details.");
          console.error("Error:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchPlanDetails();
    }
  }, [planId]);

  return (
    <div className="min-h-screen bg-[#181A1E] flex flex-col font-['Actor',_Helvetica,_sans-serif]">
      {
        loading?
          <h2>Get your plan 🔃</h2> :
          error ?
          <h2>Error Happened</h2> :
        <>
          <PlanHistoryHeader />
          
          <div className="flex flex-1">
            {/* Pass plans and selectedPlanId to sidebar */}
            <PlanHistorySidebar 
              plans={userPlans} 
              selectedPlanId={planId} 
              onSelectPlan={(id) => {
                // setSelectedPlanId(id); // Set selected plan ID on click
                navigate(`/plan-history?plan-id=${id}`); // Update the URL with selected plan ID
              }}
            />
            
            {/* Pass the selected plan to main content */}
            <PlanHistoryMain selectedPlanData={selectedPlanData} />
            
            {/* Pass the selected plan to right sidebar */}
            <PlanHistoryRightSidebar />
          </div>
          
          <PlanHistoryFooter />        
        
        </>
          
      }
    </div>
  );
};

export default PlanHistory;