import React from "react";
import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import img from "./images/img.png";
import newimg from "./images/newfpg.jpg";

const Homie = () => {
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
              <a href="#">Home</a>
            </li>

            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/sign-in">Login</Link>
            </li>
          </div>
        </ul>
      </nav>

      <div>
        <img style={{ width: 1000 }} src={newimg} />
      </div>
<Cards/>
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row">
          <div
            className="col-sm"
            style={{ maxWidth: "1000px", margin: "auto" }}
          >
            <div class="jumbotron">
              <h1 class="display-4">Jetimet dhe vemendja ndaj tyre</h1>
              <p class="lead">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr class="my-4" />
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p class="lead">
                <a
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    color: "white",
                  }}
                  class="btn"
                  href="https://faktoje.al/jetimet-duan-vemendje-gjithmone-jo-vec-nje-dite/"
                  role="button"
                  target="_blank"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row">
          <div
            className="col-sm"
            style={{ maxWidth: "1000px", margin: "auto" }}
          >
            <div class="jumbotron">
              <h1 class="display-4">Shoqata e jetimeve</h1>
              <p class="lead">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </p>
              <hr class="my-4" />
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p class="lead">
                <a
                  style={{
                    backgroundColor: "orange",
                    border: "none",
                    color: "white",
                  }}
                  class="btn"
                  href="https://jetimet.org/"
                  role="button"
                  target="_blank"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homie;
