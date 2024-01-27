
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        // <div className="navbar" >
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        //         <div className="container-fluid">
        
                    <div className="menu">
                        <Link to="/events">Meeting Rooms </Link>

                        <Link to="/bookings">Bookings</Link>

                        <Link to="/new">New Room </Link>
                        
                    </div>
        //         </div>
        //     </nav>
        // </div>
    )
}


// import React from "react";
// import { Link } from "react-router-dom";
// import './navbar.css'
// function NavBar() {
//   return (
//     <div>
//       <div className="menu">
//         <Link to="/">
//           <p className="nav-menu">Meeting Rooms</p>
//         </Link>
//         <Link to="/bookings/new">
//           <p className="nav-menu">Bookings</p>
//         </Link>
//         <Link to="/new">
//           <p className="nav-menu">New Room</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

