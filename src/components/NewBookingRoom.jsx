import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const NewBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    meetingName: '',
    meetingInRoomId: 0,
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    attendees: '',
    event_id: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/events/${booking.event_id}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      if (response.ok) {
        navigate(`/events/${booking.event_id}/bookings`);
      } else {
        console.error('Failed to create booking');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Meeting Name:
          <input
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
            type="datetime-local"
            name="endDate"
            value={booking.endDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Attendees:
          <textarea
            name="attendees"
            value={booking.attendees}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Event ID:
          <input
            type="number"
            name="event_id"
            value={booking.event_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create Booking</button>
      </form>
    </div>
  );
};

export default NewBooking;
