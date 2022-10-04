
import React from "react";
import LandingPage from "./components/LandingPage"
import CreateEvent from "./components/CreateEvent"
// import EventPage from "./components/EventPage"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />} />
          <Route index  element={<LandingPage />} />
          <Route  path="/create-event" element={<CreateEvent />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
