import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";
import axios from "axios";
const CaptainRegister = () => {
  const navigate = useNavigate();
  const { setCaptainData } = useContext(CaptainDataContext);;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "car",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        fullname: {
          firstname: formData.firstname,
          lastname: formData.lastname
        },
        email: formData.email,
        password: formData.password,
        vehicle: {
          color: formData.vehicleColor,
          plate: formData.vehiclePlate,
          capacity: parseInt(formData.vehicleCapacity),
          vehicleType: formData.vehicleType
        }
      };      
      const response = await axios.post("api/captain/register", requestData);
      if (response.status === 201) {
        const { captain,token } = response.data;
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
      console.error("Registration error:", error.response?.data || error.message);
    }
    // Reset form after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      vehicleColor: "",
      vehiclePlate: "",
      vehicleCapacity: "",
      vehicleType: "car",
    });
  };

  return (
    <div>
      <div className="w-full p-5 flex flex-col justify-between">
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
              placeholder="email@example.com"
              required
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
              placeholder="Minimum 8 characters"
              required
            />

            <label className="text-2xl font-medium mb-4" htmlFor="vehicleColor">
              Vehicle Color
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.vehicleColor}
              onChange={handleChange}
              type="text"
              name="vehicleColor"
              id="vehicleColor"
              required
              placeholder="Black"
            />

            <label className="text-2xl font-medium mb-4" htmlFor="vehiclePlate">
              Vehicle Plate Number
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.vehiclePlate}
              onChange={handleChange}
              type="text"
              name="vehiclePlate"
              id="vehiclePlate"
              required
              placeholder="ABC-123"
            />

            <label
              className="text-2xl font-medium mb-4"
              htmlFor="vehicleCapacity"
            >
              Vehicle Capacity
            </label>
            <input
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.vehicleCapacity}
              onChange={handleChange}
              type="number"
              name="vehicleCapacity"
              id="vehicleCapacity"
              required
              placeholder="4"
            />

            <label className="text-2xl font-medium mb-4" htmlFor="vehicleType">
              Vehicle Type
            </label>
            <select
              className="w-full px-4 py-2 border border-black rounded-md mt-2 bg-zinc-200 text-black text-base outline-none mb-5"
              value={formData.vehicleType}
              onChange={handleChange}
              name="vehicleType"
              id="vehicleType"
            >
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>

            <button
              className="flex justify-center bg-black w-full py-2 text-2xl rounded-md text-white font-base"
              onClick={submitHandler}
            >
              Register
            </button>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/captainlogin" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
