import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SingleMeeting from "./pages/singleMeeting";
import Index from "./components/Index";
import IndexBooking from "./components/IndexBooking";
import ShowBooking from "./components/ShowBooking";
import NewRoom from "./components/NewEventRoom";
import NewBooking from "./components/NewBookingRoom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Index />} />
          <Route path="/Bookings" element={<IndexBooking />} />
          <Route path="/Bookings/:booking_id" element={<ShowBooking />} />
          <Route path="/newEvent" element={<NewRoom/>} />
          <Route path="/newBooking" element={<NewBooking />} />
          {/* <Route path="/bookings/new" element={<Bookings/>}/>; */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
