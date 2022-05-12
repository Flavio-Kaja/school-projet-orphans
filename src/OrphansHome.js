import React from "react";

import { useNavigate,useLocation } from "react-router-dom";

const OrphansHome = () => {
  const nav = useNavigate();
const loc=useLocation()
  return (
    <div style={{ padding: "20px" }}>
      <button
        type="button"
        style={{ float: "right" }}
        className="btn btn-outline-primary"
        onClick={() => nav("/")}
      >
        Log out
      </button>
      <header>
        Welcome {loc?.search?.split('=')[1]}! Glad to have you here!
        <br />
        You are not alone!
      </header>
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
                    <button onClick={()=>nav('/jobs')} type="button" className="btn btn-success">
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
                    <a
                    className="btn  btn-success"
                      href={`https://www.gazetacelesi.al/njoftime-rezultate/prona-te-patundshme/garsoniere-1-1?cm=57;58&page=1&action=ME%20QERA&pricef=%5B%200%20TO%2020000%5D&currency=leke`}
                      target="_blank"
                    >
                      See houses
                    </a>
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
                    <a
             
                      style={{ color: "white" }}
                      className="btn btn-info"
                      target='_blank'
                      href="https://web.facebook.com/RITKCharityClub/photos"
                    >
                      Get a gift
                    </a>
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
                    <a
                      type="button"
                      style={{ color: "white" }}
                      className="btn btn-primary"
                      href='https://wa.me/+355683377337'
                    >
                      Go to chat
                    </a>
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
