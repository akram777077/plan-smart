import LoginHeader from "../components/pages/login/login-header";
import LoginBody from "../components/pages/login/login-body";

const Login = () => {
  return (
    <div className="bg-[#171a1f] min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  );
};

export default Login;