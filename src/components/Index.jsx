import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Event from "../components/Event";
import "./index.css";

const Index = () => {

  const [items, setItems] = useState([]);
  const [finding, setFind] = useState({
    startdate: "",
    starttime: "",
    enddate: "",
    endtime: "",
    floor: 0,
    capacity: 0
  })

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllItems();
        setItems(response);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchItems();
  }, []);

  const navigate = useNavigate();

  const findAvailable = () => {
    console.log("Compare to database availability!")
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFind({
      ...finding,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findAvailable();
  };

  const handleReset = () => {
    setFind({
      startdate: "",
      starttime: "",
      enddate: "",
      endtime: "",
      floor: 0,
      capacity: 0
    });
  };

  return (
    <div className="container-fluid">

      <div className="bookings">
        <ul>

          <li className="noBorder">
            Find available rooms:
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
              <div className="test">
                Start: &nbsp;
                <label className="startdate" htmlFor="startdate">Date: </label>
                <input
                  id="startdate"
                  value={finding.startdate}
                  type="date"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                /> &nbsp;
                <label className="starttime" htmlFor="starttime">Time: </label>
                <input
                  id="starttime"
                  value={finding.starttime}
                  type="time"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
                <br></br>
                End: &nbsp;
                <label className="enddate" htmlFor="enddate">Date:</label>
                <input
                  id="enddate"
                  value={finding.enddate}
                  type="date"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                /> &nbsp;
                <label className="endtime" htmlFor="endtime">Time: </label>
                <input
                  id="endtime"
                  value={finding.endtime}
                  type="time"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
                <br></br>
                <label className="floor" htmlFor="floor">Floor:</label>
                <input
                  id="floor"
                  value={finding.floor}
                  type="number"
                  onChange={handleInputChange}
                  autoComplete="off"
                  required
                />
                <br></br>
                <label className="capacity" htmlFor="capacity">Capacity:</label>
                <input
                  id="capacity"
                  value={finding.capacity}
                  type="number"
                  onChange={handleInputChange}

                  autoComplete="off"
                  required
                />
                <br></br>
                <button className="submit" type="submit"  >
                  <span>Find</span>
                </button>
                <button className="clear" onClick={handleReset} >
                  <span>Reset</span>
                </button>
              </div>
            </form>
          </li>
        </ul>
      </div>
      <hr className="line"></hr>
      <div className="bookingsV2">
        <ul>
          {items.map((item) => (
            <Link to={`/events/${item.event_id}`} key={item.event_id}>
              <li key={item.event_id} >

                <Event

                  eventId={item.event_id}
                  eventname={item.eventname}
                  capacity={item.capacity}
                  floor={item.floor}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
