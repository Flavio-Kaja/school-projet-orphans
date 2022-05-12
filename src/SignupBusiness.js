import React, { Component, useState } from "react";
import { Link,useNavigate } from "react-router-dom";




export default function SignUpBusiness() {
  const [address, setA] = useState("");
  const [nipt, setN] = useState("");
  const [name, setNa] = useState("");
  const [email, setE] = useState();
  const [password, setP] = useState();


const nav=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = { name, nipt, address, email, password };
    const items = localStorage.getItem("businesses");
    if (items) {
      const parsedItems = JSON.parse(items);



      localStorage.setItem("businesses", JSON.stringify([...parsedItems,obj]));
      nav('/sign-in')
      return;
    }

    localStorage.setItem("businesses", JSON.stringify([obj]));
    nav('/sign-in')
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Orphanage
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-business"}>
                  Signup as a business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up as an orphan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up as a business</h3>
            <div className="mb-3">
              <label>Name of business</label>
              <input
                onChange={(e) => setNa(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name of the business"
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <input
                onChange={(e) => setA(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="mb-3">
              <label>Nipt</label>
              <input
                onChange={(e) => setN(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Nipt"
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                onChange={(e) => setE(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
              onChange={(e)=>setP(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <Link to="/sign-in">sign in?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
