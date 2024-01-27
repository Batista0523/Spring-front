import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import SingleMeeting from "./pages/singleMeeting";
import Index from "./components/Index";
import Bookings from "./pages/Bookings";
import NewRoom from "./components/NewRoom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
      <div className="nav">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Index />} />
          <Route path="/new" element={<NewRoom/>} />
          {/* <Route path="/bookings/:event_id" element={<SingleBooking />} /> */}
          <Route path="/bookings/new" element={<Bookings/>}/>;

        </Routes>
      </Router>
    </div>
  )
}

export default App