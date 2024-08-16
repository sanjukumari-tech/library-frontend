import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Register.css"; // Import your custom CSS for form styling

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://library-backend-1-9l4b.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });
      // Show success message
      toast.success("You have successfully registered!", {
        position: toast.POSITION.TOP_CENTER,
      });
      
      // Redirect to login page after a delay
      setTimeout(() => {
        navigate("/login");
      }, 2000); // 2-second delay to show the toast before redirecting
    } catch (error) {
      console.error("Error registering", error);
      toast.error("Error during registration. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        <button type="submit" className="register-button">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
