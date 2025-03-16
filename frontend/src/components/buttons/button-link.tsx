import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  link: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link to={link} className="py-2 px-5 bg-Deep-teal rounded-md text-white">
      {text}
    </Link>
  );
};

export default ButtonLink;
