import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainProtectedWrapper = ({children}) => {
    const [loadding, setLoadding] = useState(true)
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){
            navigate("/captainlogin");
        }
    }, [token,navigate]);
    useEffect(() => {
        const checkCaptain = async () => {
            try {
                const response = await axios.get("api/captain/profile", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                if (response.status === 200) {
                    setLoadding(false);
                }
            } catch (error) {
                console.error("Profile error:", error.response?.data || error.message);
                localStorage.removeItem("token");
                setLoadding(false);
            }
        };
        checkCaptain();
    }, []);
  return (
    <>
      {loadding ? <div>Loading...</div> : null}
      {children}
    </>
  )
}

export default CaptainProtectedWrapper
