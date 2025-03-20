import { Bell } from 'lucide-react';
import Logo from '/assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const PlanHistoryHeader = () => {
  return (
    <header className="bg-[#181A1E] border-b border-[#1E2025] p-4 flex justify-between items-center">
      <Link to="/home" className="flex items-center gap-4">
        <img src={Logo} alt="PlanSmart Logo" className="w-8 h-8" />
        <span className="text-primary-teal font-bold text-xl font-['Albert_Sans',_Helvetica,_sans-serif]">PlanSmart</span>
      </Link>

      <button className="p-2 rounded-full bg-transparent border-none cursor-pointer">
        <Bell className="w-5 h-5 text-primary-teal" />
      </button>
    </header>
  );
};

export default PlanHistoryHeader;