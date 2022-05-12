import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import SignUpBusiness from "./SignupBusiness";
import HomePage from "./HomePage";
import Homie from "./Homie";
import OrphansHome from "./OrphansHome";


import { context } from "./context";
import BusinessHome from "./BusinessHome";
import Jobs from "./Jobs";

function App() {
  const [user, SetUser] = useState("");


  const context={
    user,
    SetUser
  }
   const AuthContext = React.createContext(context);

  return (
    <AuthContext.Provider>
      <Router>
        <div className="App">
          <div>
            <Routes>
              <Route exact path="/" element={<Homie />} />
              <Route exact path="/home" element={<HomePage />} />
              <Route exact path="/orphan/home" element={<OrphansHome />} />
              <Route exact path="/business/home" element={<BusinessHome />} />
              <Route exact path="/jobs" element={<Jobs />} />

            </Routes>
          </div>
          <Routes>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up-business" element={<SignUpBusiness />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
