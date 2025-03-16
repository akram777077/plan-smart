import { Link, useParams } from "react-router-dom";
import ButtonLink from "../components/buttons/button-link"
import detectNextRoute from "../functions/detectNextRoute"
import detectCurrentComponent from "../functions/detectCurrentComponent";
import { useEffect, useState } from "react";

type Params = {
  currentStep: string; // Define the expected param type
};

function NewPlanLayout() {
  const { currentStep } = useParams<Params>(); // Extracts the dynamic parameter
  const [goal, setGoal] = useState<string>("");

  return (
    <section className="h-dvh md:py-5 md:px-8">
      <header className="text-center sm:text-start sm:flex items-center gap-4 mb-5">
        <h2 className="grow mb-5 sm:mb-0 font-bold text-3xl text-primary-teal">Build Your Smart Plan</h2>
        <Link className="mr-5" to="/home">Cancel Plan</Link>
        <ButtonLink text="Next Step" link={detectNextRoute(currentStep ?? "")}></ButtonLink>
      </header>
      <div className="p-10">
        {detectCurrentComponent(currentStep ?? "")}
      </div>
    </section>
  )
}

export default NewPlanLayout
