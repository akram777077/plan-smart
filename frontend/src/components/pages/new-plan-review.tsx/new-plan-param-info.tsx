import { Link} from "react-router-dom";

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
      <h3
        className="sm:mb-0 font-bold text-4xl font-open-sans text-[16px]"
      > {paramTitle} </h3>

      <p className="grow flex justify-center items-center text-lg sm:text-2xl">
        {paramVal}
      </p>

      <Link className="text-end" to={`/new-plan/${paramPath}?mode=edit`}>
        Edit
      </Link>
    </section>
  )
}

export default NewPlanParamsInfo
