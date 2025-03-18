import { useState, createContext, ReactNode, Dispatch, SetStateAction, useContext} from "react"
import PlanType from "../types/plan-type"

// Define the type for the context value
interface PlanContextType {
  plan: PlanType;
  setPlan: Dispatch<SetStateAction<PlanType>>;
}

const planInitialVal: PlanType = {
  goal: "",
  subjects: new Set(),
  time: 0,
  challenges: new Set(),
};

const planContextInitialVal: PlanContextType = {
  plan: planInitialVal,
  setPlan: () => {},
}

const PlanContext = createContext<PlanContextType>(planContextInitialVal);

export function PlanProvider({ children }: {children?: ReactNode}) {
  const [plan, setPlan] = useState(planInitialVal);

  return (
    <PlanContext.Provider value={{plan, setPlan}}>
      {children}
    </PlanContext.Provider>
  )
};

export const usePlan = () => useContext(PlanContext);