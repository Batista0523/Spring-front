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

