import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import { LoginButton2 } from "../styles/loginElements";
function NavBar({ currentUser, setCurrentUser }) {
  return (
    <div>
      <div className="navbar">
        <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="navbar test" >
            <Link to="/">
              <p className="nav-menu left">Meeting Rooms</p>
            </Link>
            <Link to="/bookings">
              <p className="nav-menu">Bookings</p>
            </Link>
            <Link to="/newEvent">
              <p className="nav-menu">New Room</p>
            </Link>
            <Link to="/signup">
              <p className="nav-menu">Sign Up</p>
            </Link>
            <Link to="/users/:user_id/profile">
              <p className="nav-menu right">User</p>
            </Link>

            
          </div>
        </div>
      </div>
    </div >
  );
}

export default NavBar;
