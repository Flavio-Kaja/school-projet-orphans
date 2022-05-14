import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./components/orphan/Signup";
import SignUpBusiness from "./components/business/SignupBusiness";
import LandingPage from "./landing";
import OrphansHome from './components/orphan/OrphansHome'
import BusinessHome from "./components/business/BusinessHome";
import Jobs from "./components/Jobs/Jobs";
import {AboutUs} from "./components/common/AboutUs";


function App() {
  return (
 
      <Router>
        <div className="App">
          <div>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
        
              <Route exact path="/orphan/home" element={<OrphansHome />} />
              <Route exact path="/business/home" element={<BusinessHome />} />
              <Route exact path="/jobs" element={<Jobs />} />
              <Route exact path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up-business" element={<SignUpBusiness />} />
          </Routes>
        </div>
      </Router>

  );
}
export default App;
