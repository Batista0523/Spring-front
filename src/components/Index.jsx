import React from "react";
import { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import Event from "./event";

const Index = () => {
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
      <h1 className="mb-4 text-center">Events</h1>
      <div className="row">
        {items.map((item) => (
          <div key={item.event_id} className="col-lg-4 col-md-6 mb-4">
            <h3>{item.eventname}</h3>
            <h3>{item.capacity}</h3>
            <h3>{item.floor}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
