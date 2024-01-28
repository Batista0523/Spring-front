import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import Booking from "../components/Booking";
import './index.css'
import { Link } from "react-router-dom";
const IndexBooking = () => {
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
      {/* <h1 className="mb-4 text-center">Event Spaces</h1> */}
      <div className="row">
        {items.map((item) => (
          <div key={item.event_id} className="col-lg-4 col-md-6 mb-4">
            <Booking
              eventId={item.event_id}
              eventname={item.eventname}
              capacity={item.capacity}
              floor={item.floor}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexBooking;
