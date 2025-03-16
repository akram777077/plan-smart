import { Link } from "react-router-dom";

const FuturePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <h1 className="text-6xl font-bold text-teal-400">404</h1>
      <h2 className="text-2xl font-semibold mt-2">The page you are looking will be developed in the near future 🌹.</h2>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default FuturePage;
