import helpIcon from "../../../assets/svg/help-circle.svg"

const PlanHistoryFooter = () => {
  return (
    <footer className="bg-[#181A1E] border-t border-[#1E2025] p-4 text-center text-xs text-[#B0B4B9]">
      <div className="flex justify-center items-center gap-2">
      <img src={helpIcon} className="w-4 h-4" />
        <a href="#" className="text-[#B0B4B9] no-underline">Contact Support</a>
        <span className="mx-2">•</span>
        <span>© 2025 xAI</span>
      </div>
    </footer>
  );
};

export default PlanHistoryFooter;