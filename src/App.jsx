import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import SingleMeeting from "./pages/singleMeeting";
import SingleBooking from "./pages/singleBooking";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings/:event_id" element={<SingleBooking />} />
          <Route path="/bookings/new" element={<Bookings/>}/>;

        </Routes>
      </Router>
    </div>
  )
}

export default App