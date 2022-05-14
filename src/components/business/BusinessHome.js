import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "../popup/PopupContainer";

const BusinessHome = () => {
  const loc = useLocation();
  const nav = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLo] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);
  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
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

  const html = (
    <div className="auth-inner" style={{ marginTop: 30 }}>
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
    </div>
  );

  return (
    <div className="business" style={{ paddingTop: "30px" }}>
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-outline-primary"
        onClick={() => nav("/")}
      >
        Log out
      </button>
      <h1 style={{ padding: 20, textAlign: "center" }}>
        Welcome {loc?.search?.split("=")[1]}!
      </h1>

      <section>
        <div className="container">
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">Create a job</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Find a job</h6>
                  <p className="card-text">
                    Click the button below to see the create a new job
                  </p>
                  <p>
                    <Container triggerText={triggerText} onSubmit={onSubmit} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">Transaction</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Make a tranactions
                  </h6>
                  <p className="card-text">Click the button to donate</p>
                  <p>
                    <a
                      href="https://www.paypal.com/paypalme/"
                      onClick={() => {}}
                      type="button"
                      target="_blank"
                      className="btn btn-success"
                    >
                      Donate
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {showAlert && (
                <div class="alert alert-success" role="alert">
                  Job created successfully
                </div>
              )}
              <div className="col">{showCreate && html}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessHome;
