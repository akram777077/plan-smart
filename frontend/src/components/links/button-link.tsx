import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
  isActive?: boolean;
};

const ButtonLink: React.FC<ButtonProps> = ({ text, link, isActive = true  }) => {
  return (
      <Link 
        to={link} 
        className={`
          relative py-2 px-5 bg-deep-teal rounded-md text-white
          ${!isActive && "bg-gray-600 pointer-events-none" }
        `}
      >
        {text}
      </Link>
  );
};

export default ButtonLink;
