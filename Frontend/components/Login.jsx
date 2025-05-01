import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";
import { CaptainDataContext } from "../context/CaptainContext";
const Login = (props) => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserDataContext);
  const { setCaptainData } = useContext(CaptainDataContext);;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const submithandler = async (e) => {
    e.preventDefault();
    const requestData = {
      email: email,
      password: password,
    };
    // Try user login first
    try {
      const response = await axios.post('api/user/login', requestData);
      if (response.status === 200) {
        const { user,token } = response.data;
        setUserData({
          email: user.email,
          fullname: { firstname: user.firstname, lastname: user.lastname },
        });
        localStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (error) {
      try {
        const captainResponse = await axios.post(
          'api/captain/login',
          requestData
        );
        if (captainResponse.status === 200) {
          const { captain,token } = captainResponse.data;
          setCaptainData({
            email: captain.email,
            fullname: {
              firstname: captain.firstname,
              lastname: captain.lastname,
            },
          });
          localStorage.setItem("token", token);
          navigate("/captainhome");
        }
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message); // Handle the error if user login fails
      }
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="w-full h-screen p-5 flex flex-col justify-between ">
        <img
          className="w-18 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <div className="w-full mt-10 flex flex-col">
          <form>
            <label className="text-2xl font-medium mb-4" htmlFor="email">
              What's your email?
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
            />
            <label className="text-2xl font-medium mb-4" htmlFor="password">
              Enter Password
            </label>
            <div className="relative mb-5">
              <input
                className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁️" : "👁️"}
              </button>
            </div>
            <button
              className="flex justify-center bg-black w-full py-2 text-2xl rounded-md text-white font-base"
              onClick={(e) => submithandler(e)}
            >
              Login
            </button>
          </form>
          <p className="text-center mt-5">
            New here?{" "}
            <Link to={"/" + props.register} className="text-blue-500">
              Create an account
            </Link>
          </p>
        </div>
        <Link
          to={"/" + props.Goto}
          className={`flex justify-center ${props.btncolor} w-full py-2 text-2xl rounded-md text-white font-base`}
        >
          Login as {props.btn}
        </Link>
      </div>
    </div>
  );
};

export default Login;
