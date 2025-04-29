import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserRegister = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // Reset form after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    });
  };

  return (
    <div>
      <div className="w-full h-screen p-5 flex flex-col justify-between">
        <img
          className="w-18 ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <div className="w-full mt-10 flex flex-col">
          <form>
            <label className="text-2xl font-medium mb-4" htmlFor="firstname">
              First Name
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.firstname}
              onChange={handleChange}
              type="text"
              name="firstname"
              id="firstname"
              required
              placeholder="John"
            />

            <label className="text-2xl font-medium mb-4" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.lastname}
              onChange={handleChange}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Doe"
            />

            <label className="text-2xl font-medium mb-4" htmlFor="email">
              What's your email?
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              required
              placeholder="email@example.com"
            />

            <label className="text-2xl font-medium mb-4" htmlFor="password">
              Create Password
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.password}
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Minimum 8 characters"
            />

            <button
              className="flex justify-center bg-black w-full py-2 text-2xl rounded-md text-white font-base"
              onClick={submitHandler}
            >
              Register
            </button>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/userlogin" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          By registering, you agree to our <Link to="#" className="text-blue-500">Privacy Policy</Link> and <Link to="#" className="text-blue-500">Terms of Service</Link>.
        </p>
      </div>
    </div>
  );
}

export default UserRegister
