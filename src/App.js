import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import SignUpBusiness from "./SignupBusiness";
import HomePage from "./HomePage";
import Homie from "./Homie";
import OrphansHome from "./OrphansHome";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/" element={<Homie />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/orphan/home" element={<OrphansHome />} />
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
