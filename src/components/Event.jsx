import React from 'react';
import './event.css'
const Event = ({ eventname, capacity, floor }) => {
    return (
        <div>
            <h1>{eventname}</h1>
            <p>Capacity: {capacity}</p>
            <p>Floor: {floor}</p>  
        </div>
    );
}

export default Event;
