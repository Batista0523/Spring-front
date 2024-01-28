import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom"
import "./ShowEventSpace.css"
const API = import.meta.env.VITE_API_URL

const ShowEventSpace = () => {
    const navigate = useNavigate()
    let { event_id } = useParams()
    const [event, setEvent] = useState({
        event_id: 0,
        eventname: "",
        capacity: 0,
        floor: 0
    })

    const [bookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch(`${API}/events/${event_id}/bookings`)
            .then((response) => response.json())
            .then((res) => {
                setAllBookings(res.data.payload)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error)
            })
    }, [])

    useEffect(() => {
        fetch(`${API}/events/${event_id}`)
            .then((response) => response.json())
            .then((data) => {
                setEvent(data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error)
            })
    }, [event_id])

    return (
        <div className="bookings">
            <ul>
                <div className="heading">
                    <h2 className="eventName">{event.eventname}</h2>
                    <p className="capacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg> &nbsp; &nbsp;
                        Capacity: {event.capacity}
                    </p>
                    <p className="floor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                        </svg> &nbsp; &nbsp;
                        Floor: {event.floor}
                    </p>
                </div>
                <hr className="lineV2" ></hr>
                new booking here
                <hr className="lineV2" ></hr>
                {bookings.length > 0 ? bookings.map((booking) => (
                    <Link to={`/events/${event_id}/bookings/${booking.booking_id}`} key={booking.booking_id}>
                        <li key={booking.booking_id}>
                            <h1 className="title-variation">{booking.meetingname}</h1>
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
                        </li>
                    </Link>
                )) : <div className="alternate">No bookings for this event space!</div>}
            </ul>
        </div>
    );
}

export default ShowEventSpace;
