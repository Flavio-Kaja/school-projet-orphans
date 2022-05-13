import React from "react";
import { Link } from "react-router-dom";
import img from "./img.jpeg";
import "./styles/general.css";
import img1 from "./1.jpeg";
import aboutusImg from "./images/girlWithLights.jpg";
export const AboutUs = () => {
  return (
    <div>
      <nav>
        <ul className="list">
          <div>
            <img
              style={{
                width: 100,
                height: 90,
              }}
              src={img}
            />
          </div>
          <div>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about-us">About us</Link>
            <li>Contact</li>
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
