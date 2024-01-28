import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import { Link } from "react-router-dom";
import Event from "../components/Event";
import "./index.css";

const Index = ({ startdate }) => {

  const [items, setItems] = useState([]);

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

  return (
    <div className="container-fluid">
      <div className="find-menu">
        <h3>Finds Available Rooms:</h3>
        <label className="input menu" >
          Start:
          <input type="text" />
          End:
          <input type="text" />
          Floor:
          <input type="number" />
          Capacity:
          <input type="number" />
          <button className="btn-find">Find</button>
        </label>
      </div>
      <hr className="line"></hr>
      <div className="bookings">
        <ul>
          {items.map((item) => (
            <Link to={`/events/${item.event_id}`} >
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
