import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function NavBar() {
  return (
    <div className="contain-nav">
      <div className="navBar-menu">
        <Link to="/">
          <p className="nav-menu">Meeting Rooms</p>
        </Link>
        <Link to="/bookings">
          <p className="nav-menu">Bookings</p>
        </Link>
        <Link to="/newEvent">
          <p className="nav-menu">New Room</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
