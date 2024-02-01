import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './bookingRoom.css'
const API = import.meta.env.VITE_API_URL;

const NewBooking = () => {
  const navigate = useNavigate();

  const formatISOWithoutSecondsAndMilliseconds = (date) => {
    const isoString = date.toISOString();
    return isoString.slice(0, isoString.lastIndexOf(":"));
  };

  const [booking, setBooking] = useState({
    meetingName: "",
    meetingInRoomId: 0,
    startDate: formatISOWithoutSecondsAndMilliseconds(new Date()),
    endDate: formatISOWithoutSecondsAndMilliseconds(new Date()),
    attendees: "",
    event_id: 1,
  });
  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        `${API}/events/${booking.event_id}/bookings`
      );
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error("Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/events/${booking.event_id}/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      if (response.ok) {
        await fetchBookings();
        navigate(`/events/${booking.event_id}`);
      } else {
        console.error("Failed to create booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="booking">
      <ul>
        <li>
          <h2>Create a New Booking</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Meeting Name:
              <input
              className='input'
                type="text"
                name="meetingName"
                value={booking.meetingName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Meeting Room ID:
              <input
              className='input'
                type="number"
                name="meetingInRoomId"
                value={booking.meetingInRoomId}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Start Date:
              <input
              className='input'
                type="datetime-local"
                name="startDate"
                value={booking.startDate}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              End Date:
              <input
              className='input'
                type="datetime-local"
                name="endDate"
                value={booking.endDate}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Attendees:
              <input
              className='input'
                type=""
                name="attendees"
                value={booking.attendees}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className="btn" type="submit">Create Booking</button>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default NewBooking;
