import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({});
    const submithandler = (e) => {
      e.preventDefault();
      setData({email, password});
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
              <input
                className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button
                className="flex justify-center bg-black w-full py-2 text-2xl rounded-md text-white font-base"
                onClick={(e) => submithandler(e)}
              >
                Login
              </button>
            </form>
            <p className="text-center mt-5">
              New here?{" "}
              <Link to={"/"+props.register} className="text-blue-500">
                Create an account
              </Link>
            </p>
          </div>
          <Link to={"/"+props.Goto} className={`flex justify-center ${props.btncolor} w-full py-2 text-2xl rounded-md text-white font-base`}>Login as {props.btn}</Link>
        </div>
      </div>
    );
}

export default Login
