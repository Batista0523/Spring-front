import React, { useState, useEffect } from "react";
import { getAllItems } from "../helpers/helperFunc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Event from "../components/Event";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {
  LoginWrapper,
  LoginBackground3,
  LoginHeaderV3,
  LoginButton2,
  LoginButton,
  LoginButton3,
  LoginButton4
} from "../styles/loginElements";
import "./index.css";
import "animate.css"
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

    <div className="container-fluid animate__animated animate__zoomIn">
      {/* <LoginBackground3 >

        <LoginHeaderV3>Find available rooms:</LoginHeaderV3>


        <Form className="form" noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="startdate">
              <Form.Control
                className="useLoginStyle"
                required
                name="startdate"
                type="date"
                placeholder="Start Date"
                value={finding.startdate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="starttime">
              <Form.Control
                className="useLoginStyle"
                required
                name="starttime"
                type="time"
                placeholder="Start Time"
                value={finding.starttime}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="enddate">
              <Form.Control
                className="useLoginStyle"
                name="enddate"
                type="date"
                placeholder="End Date"
                value={finding.enddate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="endtime">
              <Form.Control
                className="useLoginStyle"
                name="endtime"
                type="time"
                placeholder="End Time"
                value={finding.endtime}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="floor">
              <Form.Control
                className="useLoginStyle"
                name="floor"
                type="number"
                placeholder="Floor"
                value={finding.floor}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="capacity">
              <Form.Control
                className="useLoginStyle"
                name="capacity"
                type="number"
                placeholder="Capacity"
                value={finding.capacity}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Row>
          <br></br>
          <LoginButton2 className="submit" type="submit"  >
            <span>Find</span>
          </LoginButton2>
          <LoginButton2 className="clear" onClick={handleReset} >
            <span>Reset</span>
          </LoginButton2>

        </Form>
      </LoginBackground3> */}

      <div className="bookings animate__animated animate__slideInRight">
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
                <div className="test2">
                  <LoginButton3 className="submit" type="submit"  >
                    Find
                  </LoginButton3>
                  <LoginButton3 className="clear" onClick={handleReset} >
                    Reset
                  </LoginButton3>
                </div>
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
