import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export const Form = ({ onSubmit }) => {
  const loc = useLocation();
  const nav = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLo] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { title, location, desc, salary };

    const jobs = JSON.parse(localStorage.getItem("jobs"));

    if (jobs) {
      const newJobs = [...jobs, obj];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      setShowCreate(false);
      alert("Job created successfully");
      return;
    }

    localStorage.setItem("jobs", JSON.stringify([obj]));
    alert("Job created successfully");
    setShowCreate(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a job</h3>
      <div className="mb-3">
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="email"
          className="form-control"
          placeholder="Enter job title"
        />
      </div>
      <div className="mb-3">
        <label>Location</label>
        <input
          onChange={(e) => setLo(e.target.value)}
          id="pass"
          type="text"
          className="form-control"
          placeholder="Enter location"
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          id="pass"
          type="text"
          className="form-control"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-3">
        <label>Salary</label>
        <input
          onChange={(e) => setSalary(e.target.value)}
          id="pass"
          type="number"
          className="form-control"
          placeholder="Enter salary"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;
