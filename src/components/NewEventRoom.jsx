import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newRoom.css'
const API = import.meta.env.VITE_API_URL;
import {
  LoginButton3
} from "../styles/loginElements";

const NewRoom = () => {
  const navigate = useNavigate();
  const [meeting, setMeeting] = useState({
    eventName: '',
    capacity: 0,
    floor: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeeting((prevMeeting) => ({ ...prevMeeting, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(meeting),
      });

      if (response.ok) {

        navigate('/events');
      } else {

        console.error('Failed to create room');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contain animate__zoomInDown">
      <div className="bookings">
        <ul>
          <li className="noBorder">
            {/* <div className="title">Create a Room </div> */}
            <form onSubmit={handleSubmit} className="test-form">
              <label>
                Room Name:
                <input
                  type="text"
                  name="eventName"
                  value={meeting.eventName}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Floor:
                <input
                  type="number"
                  name="floor"
                  value={meeting.floor}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Capacity:
                <input
                  type="number"
                  name="capacity"
                  value={meeting.capacity}
                  onChange={handleChange}
                />
              </label>
              <br />
              <LoginButton3 type="submit">Create a Room</LoginButton3>
              <br></br>
              <br></br>
              <hr></hr>
            </form>
          </li>
          <br></br>
          
        </ul>

      </div>
    </div>
  );
};

export default NewRoom;
