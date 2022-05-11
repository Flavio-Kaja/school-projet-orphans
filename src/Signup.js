import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
 



const [fName,setA]=useState('')
const [lName,setN]=useState('')
const [cel,setNa]=useState('')
const [skills,setE]=useState('')


const handleSubmit = (e) => {
  e.preventDefault();

const obj={fName,lName, cel,skills}




localStorage.setItem('orphans',JSON.stringify(obj))
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
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
              onChange={(e)=>setA(e.target.value)}
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input
                onChange={(e)=>setN(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="mb-3">
              <label>Skills</label>
              <input
                onChange={(e)=>setE(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Enter skills"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label>Cel</label>
              <input
                onChange={(e)=>setNa(e.target.value)}
                type="phone"
                className="form-control"
                placeholder="Enter your phone number"
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
