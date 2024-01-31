import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState } from 'react';
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
import UserPortal from "./pages/UserPortal"
import ProtectedRoute from "./components/ProtectedRoute"
import UserInfoEditForm from "./components/UserInfoEditForm"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import PublicRoute from "./components/PublicRoute"
import { Reset } from 'styled-reset'
import FourOFour from "./pages/FourOFour"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="main">
      <div className="mainL2">
        <LoginWrapper>
          <Router>
            <NavBar currentUser={currentUser}
              setCurrentUser={setCurrentUser} />
            <Routes>

              {/* public route login */}
              <Route path="/login"
                element={
                  <PublicRoute
                    element={Login}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              {/* public route - if sent to home => redirect to login */}
              <Route path="/" element={<Navigate to="/login" />} />

              {/* public route - sign up */}
              <Route path="/signup"
                element={
                  <PublicRoute
                    element={SignUp}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - user info edit */}
              <Route
                path="/users/:user_id/profile/edit"
                element={
                  <ProtectedRoute
                    element={UserInfoEditForm}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - user info */}
              <Route
                path="/users/:user_id/profile"
                element={
                  <ProtectedRoute
                    element={UserPortal}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - home screen of specific user */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute
                    element={Home}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list all data */}
              <Route
                path="/events"
                element={
                  <ProtectedRoute
                    element={Index}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list 1 data element */}
              <Route
                path="/events/:event_id"
                element={
                  <ProtectedRoute
                    element={ShowEventSpace}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list all data */}
              <Route
                path="/bookings"
                element={
                  <ProtectedRoute
                    element={IndexBooking}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list all data */}
              <Route
                path="/events/:event_id/bookings/:booking_id"
                element={
                  <ProtectedRoute
                    element={ShowBooking}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list all data */}
              <Route
                path="/newEvent"
                element={
                  <ProtectedRoute
                    element={NewRoom}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* private route - list all data */}
              <Route
                path="/newBooking"
                element={
                  <ProtectedRoute
                    element={NewBooking}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />

              {/* public route - page not found */}
              <Route
                path="*"
                element={
                  <PublicRoute
                    element={FourOFour}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
            </Routes>
          </Router>
        </LoginWrapper>
      </div>
    </div>
  );
}

export default App;
