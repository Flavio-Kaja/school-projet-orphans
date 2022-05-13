import React, { useState } from "react";
import Dashboard from "./Dashboard";
import DashboardBusiness from "./DashboardBusiness";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const nav = useNavigate();
  const [show, setShow] = useState("orphans");

  return (
    <div style={{ paddingTop: 30 }}>
      <button
        style={{ float: "right" }}
        type="button"
        className="btn btn-outline-primary"
        onClick={() => nav("/sign-in")}
      >
        Logout
      </button>

      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setShow("businesses")}
        >
          Businesses
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setShow("orphans")}
        >
          Orphans
        </button>
      </div>

      {show === "orphans" && <Dashboard />}

      {show === "businesses" && <DashboardBusiness />}
    </div>
  );
};

export default HomePage;
