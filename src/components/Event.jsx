import React, { useEffect, useState } from "react";
import "./event.css";
import { getAllBookings } from "../helpers/helperFunc";

const Event = ({ eventId, eventname, capacity, floor, startdate, enddate }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getAllBookings(eventId);
        setBookings(response);
      } catch (error) {
        console.error("Error fetching bookings", error);
      }
    };

    fetchBookings();
  }, [eventId]);

  return (
    <div>
      <div className="event">
        <h1>{eventname}</h1>
        <p>Capacity: {capacity}</p>
        <p>Floor: {floor}</p>
      </div>
    </div>
  );
};

export default Event;
