import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
function NavBar() {
  return (
    <div>
      <div className="menu">
        <Link to="/">
          <p className="nav-menu">Meeting Rooms</p>
        </Link>
        <Link to="/bookings/new">
          <p className="nav-menu">Bookings</p>
        </Link>
        <Link to="/new">
          <p className="nav-menu">New Room</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
