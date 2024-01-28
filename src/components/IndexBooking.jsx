import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import Booking from "../components/Booking";
import './index.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllBookings } from "../helpers/helperFunc";
const API = import.meta.env.VITE_API_URL

const IndexBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${API}/bookings`)
      .then((response) => response.json())
      .then((data) => {
        setBookings(data)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
      })
  }, [])

  return (
    <div className="container-fluid">
      {/* <h1 className="mb-4 text-center">Event Spaces</h1> */}
      <div className="row">
        {bookings.map((booking) => (
          <div key={booking.booking_id} className="col-lg-4 col-md-6 mb-4">
            <Booking
              booking={booking}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexBooking;
