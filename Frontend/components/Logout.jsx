import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const response = await axios.get("api/user/logout", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/");
        }
      } catch (error) {
        console.error("Logout error:", error);
        localStorage.removeItem("token"); // Remove token anyway in case of error
        navigate("/");
      }
    };

    performLogout();
  }, [navigate]);

  return <></>;
};

export default Logout;
