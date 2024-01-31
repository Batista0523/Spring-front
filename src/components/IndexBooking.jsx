import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import Booking from "../components/Booking";
import './index.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllBookings } from "../helpers/helperFunc";
import Button from "react-bootstrap/Button";
import "animate.css"

import {
  LoginButton,
  LoginButton2
} from '../styles/loginElements'

const API = import.meta.env.VITE_API_URL

const IndexBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage, setBookingsPerPage] = useState(3);

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

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid animate__zoomInDown">
      <div  >
        {currentBookings.map((booking) => (
          <div key={booking.booking_id} >
            <Booking
              booking={booking}
            />
          </div>
        ))}
      </div>
      <div className="booking-container-pagination">
          <LoginButton2
            className="atlBtnColor"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            
          >
            Previous
          </LoginButton2>
          <span className="space"> &nbsp; page&nbsp;{currentPage} of&nbsp;{Math.ceil(bookings.length/3)} &nbsp;</span>
          <LoginButton2
            className="atlBtnColor"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastBooking >= bookings.length}
            
          >
            Next
          </LoginButton2>
        </div>
    </div>
  );
};

export default IndexBooking;
