import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SingleMeeting from "./pages/singleMeeting";
import Index from "./components/Index";
import ShowEventSpace from "./components/ShowEventSpace";
import IndexBooking from "./components/IndexBooking";
import ShowBooking from "./components/ShowBooking";
import NewRoom from "./components/NewEventRoom";
import NewBooking from "./components/NewBookingRoom";
import { LoginWrapper } from "./styles/loginElements";
import "./App.css"

function App() {
  return (
    <div className="main">
      <div className="mainL2">
      <LoginWrapper>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Index />} />
            <Route path="/events/:event_id" element={<ShowEventSpace />} />
            <Route path="/bookings" element={<IndexBooking />} />
            <Route path="/events/:event_id/bookings/:booking_id" element={<ShowBooking />} />
            <Route path="/newEvent" element={<NewRoom />} />
            <Route path="/newBooking" element={<NewBooking />} />
            {/* <Route path="/bookings/new" element={<Bookings/>}/>; */}

          </Routes>
        </Router>
      </LoginWrapper>
      </div>
    </div>
  );
}

export default App;
