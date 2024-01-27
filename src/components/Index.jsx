import React from 'react';
import { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc"
import Event from './event';



const Index = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await getAllItems();
                setItems(response);
                console.log(response)
            } catch (error) {
                console.error("Error fetching items", error);
            }
        };

        fetchItems();
    }, []);



    return (
        <div>
            <div>
                Hello

                {items.map((item) => {
                    return (
                        
                        <Event
                            key={item.event_id}
                            item={item}
                        />
                    )
                    // <div key={item.event_id}>
                    //     <h1 >{item.eventName}</h1>
                    // </div>
                })}
            </div>
        </div>
    );
}

export default Index;
