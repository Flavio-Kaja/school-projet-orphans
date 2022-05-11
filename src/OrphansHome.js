import React from "react";

const OrphansHome = () => {
  return (
    <div>
      <header>Welcome! Glad to have you here!</header>
      <div>
        <div className="container" style={{ paddingTop: 40 }}>
          <div className="row" style={{ marginBottom: 20 }}>
            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">JOBS</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Find a job</h6>
                  <p className="card-text">
                    Click the button below to see the list of jobs
                  </p>
                  <p>
                    <button type="button" className="btn btn-success">
                      See jobs
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">Houses</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Find a house
                  </h6>
                  <p className="card-text">
                    Click the below button to see a list of houses
                  </p>
                  <p>
                    <button type="button" className="btn btn-success">
                      See Houses
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">GIFTS</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Get a gift</h6>
                  <p className="card-text">
                    Click the button below to win a gift
                  </p>
                  <p>
                    <button
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-info"
                    >
                      Get a gift
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ cursor: "pointer" }}>
                <div className="card-body">
                  <h5 className="card-title">CHATBOX</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Start a chat
                  </h6>
                  <p className="card-text">
                    Click the button below to start a chat!
                  </p>
                  <p>

                  <button
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-primary"
                    >
                Go to chat
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrphansHome;
