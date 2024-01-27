import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import SingleMeeting from "./pages/singleMeeting";
import Index from "./components/Index";
import Bookings from "./pages/Bookings";
import NewRoom from "./components/NewEventRoom";
import NewBooking from "./components/NewBookingRoom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Index />} />
          <Route path="/newEvent" element={<NewRoom/>} />
          <Route path="/newBooking" element={<NewBooking />} />
          {/* <Route path="/bookings/new" element={<Bookings/>}/>; */}

        </Routes>
      </Router>
    </div>
  )
}

export default App