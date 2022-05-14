import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/img.png";
import "../../styles/general.css";
import aboutusImg from "../../images/girlWithLights.jpg";
export const AboutUs = () => {
  return (
    <div>
      <nav>
        <ul className="list">
          <div>
            <img
              style={{
                width: 140,
              }}
              src={img}
            />
          </div>
          <div>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to="/sign-in">Login</Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row align-items-center">
          <div className="col">
            <img
              src={aboutusImg}
              style={{ maxWidth: "450px" }}
              alt="picture of a group of students"
            />
          </div>

          <div
            className="col"
            style={{
              marginTop: 30,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            <h1
              style={{
                fontSize: 30,
                paddingBottom: 30,
                fontFamily: "Sans",
              }}
            >
              Our story
            </h1>
            <hr></hr>
            <p
              style={{
                fontSize: 26,
                fontFamily: "Josefin Slab, serif",
              }}
            >
              This project started as a small dream between friends that grew
              into a full time passion . With the help of many this project
              stands where it is today . Always striving to help those who need
              it!​. Even though we have come so far , we sill have a lot to do ,
              our journey is one of a life time To this day our foundations
              remains the same , if you are willing to help the most vulnerable
              get back on their feet , make sure to contact us .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
