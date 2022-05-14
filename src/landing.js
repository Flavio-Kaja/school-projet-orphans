import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import img from "./images/img.png";
import newimg from "./images/newfpg.jpg";
import { motion,useAnimation } from "framer-motion";
import Header from "./components/common/Header";



const Homie = () => {


  return (
    <>
    <Header/>
    <div>
   

      <div>
        <motion.img
                    className="immmmaaaaazh"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:1, type: "spring", stiffness: 200 }}
          style={{ width: 1000 }}
          src={newimg}
        />
      </div>

      <motion.h3 initial={{x:100}} animate={{x:0}} style={{ padding: "3rem", textAlign: "center" }}>Who are we?</motion.h3>
      <Cards />
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row">
          <div
            className="col-sm"
            style={{ maxWidth: "1000px", margin: "auto" }}
          >
            <div class="jumbotron">
              <motion.h1
            
              
            class="display-4">Jetimet dhe vemendja ndaj tyre</motion.h1>
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
    </>
  );
};

export default Homie;
