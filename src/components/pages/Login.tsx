import { NavLink } from "react-router-dom";
import eye from "../../assets/eye.svg";
import eyeOff from "../../assets/eye-off.svg";
import holaflyLogo from "../../assets/holafly-logo.svg";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="flex gap-4 w-full items-center justify-center h-full bg-primary">
      <section className="hidden flex-col justify-center h-full w-1/2 bg-white p-8 md:flex text-start rounded-r-2xl">
        <h1 className="text-primary text-[8vw] font-bold">Welcome back!</h1>
        <p className="text-primary">View all your plans</p>
      </section>
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <section className="flex flex-col m-6 gap-4 px-8 py-20 items-center justify-center bg-white rounded-lg shadow-lg w-full md:max-w-96">
          <img src={holaflyLogo} />
          <h1 className="text-3xl md:hidden">Nice to see you back</h1>
          <input
            type="text"
            name="user"
            placeholder="Username"
            className="outline-primary border border-gray-300 rounded-md p-2 w-full"
          />
          <div className="flex border border-gray-300 rounded-md items-center pr-2 w-full focus-within:border-2 focus-within:border-primary">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="outline-none rounded-md p-2 w-full"
            />
            {showPassword ? (
              <img
                src={eye}
                alt="eye"
                className="w-6 h-6"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <img
                src={eyeOff}
                alt="eyeOff"
                className="w-6 h-6"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <NavLink
            to="/home"
            className="bg-primary w-full text-white text-center rounded-md p-2 hover:bg-[#e6485cee]"
          >
            <input type="submit" name="" value="Login" />
          </NavLink>
        </section>
      </div>
    </form>
  );
};

export default Login;
