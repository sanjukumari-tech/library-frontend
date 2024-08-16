import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post("https://library-backend-1-9l4b.onrender.com/api/auth/logout");
        navigate("/login");
      } catch (error) {
        console.error("Error logging out", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
