import { Link, NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="flex items-center justify-between py-2 mb-3">
      <div className="logo-name flex justify-center items-center gap-1 md:gap-3">
        <img src="./src/assets/svg/logo.svg" alt="Logo image." />
        <p className="font-bold text-3xl">Plan Smart</p>
      </div>

      <ul 
        className="
          flex justify-center items-center self-stretch 
          font-montserrat-med text-[18px] gap-3 md:gap-5
        "
      >
        <li>
          <NavLink className={({isActive}) => isActive ? "text-primary-teal" : ""} to="/home">
            Home
          </NavLink>
        </li>
        <li className="hidden sm:inline-block">
          <NavLink className={({isActive}) => isActive ? "text-primary-teal" : ""} to="/new-plan">
            Create a plan
          </NavLink>
        </li>
        <li className="hidden sm:inline-block">
          <NavLink className={({isActive}) => isActive ? "text-primary-teal" : ""} to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink end className={({isActive}) => isActive ? "text-primary-teal" : ""} to="/login">
            Login
          </NavLink>
        </li>
      </ul>

    </header>
  );
};

export default HomeHeader;
