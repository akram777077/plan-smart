import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePlan } from "../../../context/plan-params";

type Params = {
  paramTitle: string;
  paramVal: string;
  paramPath: string;
};


function NewPlanParamsInfo(
  {paramTitle, paramVal, paramPath}: Params
) {
  return (
    <section 
      className="
      w-full sm:[width:calc(50%-4px)] lg:sm:[width:calc(50%-8px)] 
      mb-3
      flex flex-col self-stretch items-center 
    bg-blue-gray py-7 px-5 gap-5 rounded-xl
      text-primary-teal text-xs sm:text-sm 
      "
    >
      <h4 
        className="grow mb-5 sm:mb-0 font-bold text-2xl font-open-sans text-[16px]"
      >
        {paramTitle}
      </h4>

      <p className="text-center text-lg sm:text-2xl">
        {paramVal}
      </p>

      <Link className="text-end" to={`/new-plan/${paramPath}?mode=edit`}>
        Edit
      </Link>
    </section>
  )
}

export default NewPlanParamsInfo
