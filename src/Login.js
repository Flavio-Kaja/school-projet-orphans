import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const businesses = JSON.parse(localStorage.getItem("businesses"));
  const orphans = JSON.parse(localStorage.getItem("orphans"));

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email === "admin@orphans.com" && values.password === "test123") {
      return nav("/home");
    }

    const currentBusiness = businesses?.find(
      (bis) => bis.email === values.email && bis.password === values.password
    );
    const isOrphan = orphans?.find(
      (orph) => orph.email === values.email && orph.password === values.password
    );

    if (isOrphan) nav(`/orphan/home?oprhan=${isOrphan?.fName}`);
    if (currentBusiness) nav(`/business/home?business=${currentBusiness?.name}`);


  if(!isOrphan || !currentBusiness) {
    setShowAlert(true)
  }

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
            {showAlert && (
              <div class="alert alert-danger" role="alert">
                Insert the right credentials
              </div>
            )}
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address or phone number if you are an orphan</label>
              <input
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                type="text"
                id="email"
                className="form-control"
                placeholder="Enter email/phone number"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                id="pass"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
         
          </form>
        </div>
      </div>
    </>
  );
}
