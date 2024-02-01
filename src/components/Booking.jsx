import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Booking.css'
import { getAllBookings } from "../helpers/helperFunc";
import { getAllItems } from "../helpers/helperFunc";
import "animate.css"
const API = import.meta.env.VITE_API_URL
const Booking = ({ booking }) => {
    const [event, setEvent] = useState({
        event_id: 0,
        eventname: "",
        capacity: 0,
        floor: 0
    });


    useEffect(() => {
        fetch(`${API}/events/${booking.event_id}`)
            .then((response) => response.json())
            .then((event) => {
                setEvent(event)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error)
            })
    }, [booking.event_id])



    return (
        <div className="bookings animate__animated animate__zoomIn">
            <ul >
                <Link to={`/events/${event.event_id}/bookings/${booking.booking_id}`} key={booking.booking_id} >
                    <li key={booking.booking_id}>
                        <h1>{booking.meetingname}</h1>
                        <h2>{event.eventname}</h2>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                            </svg> &nbsp;
                            Start: &nbsp;
                            {booking.startdate.split("T")[0].replaceAll("-", "/")} &nbsp; {booking.startdate.split("T")[1].split(":")[0]}:{booking.startdate.split("T")[1].split(":")[1]} &nbsp; {Number(booking.startdate.split("T")[1].split(":")[0]) > 12 ? "PM" : "AM"}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                            </svg> &nbsp;
                            End: &nbsp;
                            {booking.enddate.split("T")[0].replaceAll("-", "/")} &nbsp; {booking.enddate.split("T")[1].split(":")[0]}:{booking.enddate.split("T")[1].split(":")[1]} &nbsp; {Number(booking.enddate.split("T")[1].split(":")[0]) > 12 ? "PM" : "AM"}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                            </svg> &nbsp;
                            Floor: {event.floor}
                        </p>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Booking;