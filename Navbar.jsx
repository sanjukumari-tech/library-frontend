import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/login" className="navbar-link">Login</Link></li>
        <li><Link to="/register" className="navbar-link">Register</Link></li>
        <li><Link to="/add-book" className="navbar-link">Add Book</Link></li>
        <li><Link to="/logout" className="navbar-link">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
