import { Link } from "react-router-dom";
import linkedinIcon from "/assets/svg/linkedin.svg";

const teamMembers = [
  {
    name: "Ahmed Ben Chakhter",
    role: "Full-Stack Engineer",
    linkedin: "https://www.linkedin.com/in/ahmedbenchakhter/",
  },
  {
    name: "Hocine Bechebil",
    role: "UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/hocine-bechebil/",
  },
  {
    name: "Akram Dris",
    role: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/akram-dris-a75585268/",
  },
];

const AboutUs = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">Meet Our Team</h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        We are a passionate team dedicated to crafting innovative solutions and delivering exceptional digital experiences.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl text-center shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-300">{member.name}</h3>
            <p className="text-gray-300">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 mt-3"
            >
              <img src={linkedinIcon} alt="Linkedin icon." />
            </a>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default AboutUs;
