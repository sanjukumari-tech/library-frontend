import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Login.css"; // Import CSS for the login form

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://library-backend-1-9l4b.onrender.com/api/auth/login", {
        email,
        password,
      });
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/library");
      }, 2000);
    } catch (error) {
      console.error("Error logging in", error);
      toast.error("Invalid login credentials", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
