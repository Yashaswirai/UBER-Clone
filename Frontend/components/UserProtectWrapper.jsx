import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const [loadding, setLoadding] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){
            navigate("/userlogin");
        }
    }, [token,navigate]);
    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await axios.get("api/user/profile", {
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
        checkUser();
    }, []);
  return (
    <>
      {loadding ? <div>Loading...</div> : null}
      {children}
    </>
  )
}

export default UserProtectWrapper
