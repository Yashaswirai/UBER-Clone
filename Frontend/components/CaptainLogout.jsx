import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CaptainLogout = () => {
    const navigate = useNavigate();
    // Perform logout logic here
    const performLogout = async () => {
        try {
            const response = await axios.get("api/captain/logout", {
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
};

export default CaptainLogout
