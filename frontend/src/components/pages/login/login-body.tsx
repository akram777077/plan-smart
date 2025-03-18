import { Link } from "react-router-dom";
import googleIcon from "../../../assets/svg/google.svg"; 
import facebookIcon from "../../../assets/svg/facebook.svg"; 
import appleIcon from "../../../assets/svg/apple.svg";

const LoginBody = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md" style={{ backgroundColor: '#ffffff' }}>
      <h2 className="text-[#171a1f] text-2xl md:text-3xl font-bold [font-family:'Albert_Sans',Helvetica] text-center mb-2">
        Create an account
      </h2>

      <p className="text-[#9095a0] text-base [font-family:'Actor',Helvetica] text-center mb-6">
        Start your 30 day free trial
      </p>

      <div className="mb-6">
        <label className="block text-[#424955] text-lg [font-family:'Actor',Helvetica] mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 bg-gray-100 rounded-xl text-[#bcc1ca] [font-family:'Actor',Helvetica] text-lg focus:outline-none focus:ring-2 focus:ring-[#00927f]"
        />
      </div>

      <button className="w-full bg-[#00927f] text-white text-lg [font-family:'Actor',Helvetica] py-3 rounded-xl hover:bg-[#007f6d] transition-colors">
        Continue
      </button>

      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-[#6e7787] text-sm [font-family:'Actor',Helvetica]">
          or sign up with
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      <div className="flex justify-between gap-4 mb-6">
        <button className="flex-1 flex items-center justify-center bg-[#fef1f1] text-[#c71610] text-base [font-family:'Actor',Helvetica] py-2 rounded-xl hover:bg-[#f9e2e2] transition-colors">
          <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
          Google
        </button>

        <button className="flex-1 flex items-center justify-center bg-[#f3f6fb] text-[#335ca6] text-base [font-family:'Actor',Helvetica] py-2 rounded-xl hover:bg-[#e6e9f2] transition-colors">
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5 mr-2" />
          Facebook
        </button>

        <button className="flex-1 flex items-center justify-center bg-gray-100 text-[#565e6c] text-base [font-family:'Actor',Helvetica] py-2 rounded-xl hover:bg-gray-200 transition-colors">
          <img src={appleIcon} alt="Apple" className="w-5 h-5 mr-2" />
          Apple
        </button>
      </div>

      <p className="text-center text-[#171a1f] text-sm [font-family:'Actor',Helvetica]">
        Already have an account?{" "}
        <Link to="/signin" className="text-[#00927f] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default LoginBody;