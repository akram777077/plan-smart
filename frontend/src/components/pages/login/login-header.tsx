import planSmartLogo from "/assets/svg/logo.svg";

const LoginHeader = () => {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start mb-6">
        <img
          className="w-12 h-12"
          src={planSmartLogo}
          alt="PlanSmart Logo"
        />
        <span className="ml-2 text-white text-2xl font-bold [font-family:'Albert_Sans',Helvetica]">
          PlanSmart
        </span>
      </div>

      <h1 className="text-[#00e8c9] text-4xl md:text-5xl font-bold [font-family:'Montserrat',Helvetica] leading-tight mb-4">
        Unlock Your Smart Study Plan
      </h1>

      <p className="text-[#6e7787] text-base font-regular [font-family:'Open_Sans',Helvetica] max-w-md mx-auto md:mx-0">
        Sign in to let PlanSmart AI craft your perfect schedule, exam prep,
        and study hacks—tailored just for you!
      </p>
    </div>
  );
};

export default LoginHeader;