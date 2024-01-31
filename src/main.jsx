import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { createRef } from 'react'
// import { createRoot } from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   NavLink,
//   useLocation,
//   useOutlet,
// } from 'react-router-dom'
// import { CSSTransition, SwitchTransition } from 'react-transition-group'
// import { Container, Navbar, Nav } from 'react-bootstrap'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";
// import { useState } from 'react';
// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
// import SingleMeeting from "./pages/singleMeeting";
// import Index from "./components/Index";
// import ShowEventSpace from "./components/ShowEventSpace";
// import IndexBooking from "./components/IndexBooking";
// import ShowBooking from "./components/ShowBooking";
// import NewRoom from "./components/NewEventRoom";
// import NewBooking from "./components/NewBookingRoom";
// import { LoginWrapper } from "./styles/loginElements";
// import UserPortal from "./pages/UserPortal"
// import ProtectedRoute from "./components/ProtectedRoute"
// import UserInfoEditForm from "./components/UserInfoEditForm"
// import Login from "./pages/Login"
// import SignUp from "./pages/SignUp"
// import PublicRoute from "./components/PublicRoute"
// import { Reset } from 'styled-reset'
// import FourOFour from "./pages/FourOFour"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"

// const routes = [
//   {
//     path: '/login', name: 'login', element: <PublicRoute
//       element={Login}
//     />, nodeRef: createRef()
//   },
//   {
//     path: '/', name: 'login', element: <PublicRoute
//       element={Login}
//     />, nodeRef: createRef()
//   },
//   {
//     path: '/signup', name: 'signup', element: <PublicRoute
//       element={SignUp}
//     />, nodeRef: createRef()
//   },
//   {
//     path: '/users/:user_id/profile/edit',
//     name: 'editUser',
//     element: <ProtectedRoute
//       element={UserInfoEditForm}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/users/:user_id/profile',
//     name: 'editUser',
//     element: <ProtectedRoute
//       element={UserInfoEditForm}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/home',
//     name: 'home',
//     element: <ProtectedRoute
//       element={Home}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/events',
//     name: 'events',
//     element: <ProtectedRoute
//       element={Index}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/events/:event_id',
//     name: 'oneEvent',
//     element: <ProtectedRoute
//       element={ShowEventSpace}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/bookings',
//     name: 'bookings',
//     element: <ProtectedRoute
//       element={IndexBooking}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/events/:event_id/bookings/:booking_id',
//     name: 'oneBookings',
//     element: <ProtectedRoute
//       element={ShowBooking}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/newEvent',
//     name: 'newEvent',
//     element: <ProtectedRoute
//       element={NewRoom}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '/newBooking',
//     name: 'newBooking',
//     element: <ProtectedRoute
//       element={NewBooking}
//     />,
//     nodeRef: createRef(),
//   },
//   {
//     path: '*',
//     name: 'FourOFour',
//     element: <PublicRoute
//       element={FourOFour}
//     />,
//     nodeRef: createRef(),
//   }
// ]

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Example />,
//     children: routes.map((route) => ({
//       index: route.path === '/',
//       path: route.path === '/' ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ])

// function Example() {
//   const location = useLocation()
//   const currentOutlet = useOutlet()
//   const { nodeRef } =
//     routes.find((route) => route.path === location.pathname) ?? {}
//   return (
//     <>
//       <Navbar bg="light">
//         <Nav className="mx-auto">
//           {routes.map((route) => (
//             <Nav.Link
//               key={route.path}
//               as={NavLink}
//               to={route.path}
//               className={({ isActive }) => (isActive ? 'active' : undefined)}
//               end
//             >
//               {route.name}
//             </Nav.Link>
//           ))}
//         </Nav>
//       </Navbar>
//       <Container className="container">
//         <SwitchTransition>
//           <CSSTransition
//             key={location.pathname}
//             nodeRef={nodeRef}
//             timeout={300}
//             classNames="page"
//             unmountOnExit
//           >
//             {(state) => (
//               <div ref={nodeRef} className="page">
//                 {currentOutlet}
//               </div>
//             )}
//           </CSSTransition>
//         </SwitchTransition>
//       </Container>
//     </>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
