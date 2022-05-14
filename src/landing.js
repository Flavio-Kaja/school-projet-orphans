import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import img from "./images/img.png";
import newimg from "./images/newfpg.jpg";
import { motion, useAnimation } from "framer-motion";
import Header from "./components/common/Header";

const Homie = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <motion.img
            className="immmmaaaaazh img-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}
            style={{ width: 1000 }}
            src={newimg}
          />
        </div>

        <motion.h3
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          style={{
            padding: "3rem",
            textAlign: "center",
            fontSize: "2.5em",
            fontFamily: "Tangerine, cursive",
          }}
        >
          Who are we?
        </motion.h3>
        <Cards />
        <div className="container" style={{ paddingTop: 100 }}>
          <div className="row">
            <div
              className="col-sm"
              style={{ maxWidth: "1000px", margin: "auto" }}
            >
              <div class="jumbotron shadow-div">
                <motion.h1 class="display-4 main-title-web">
                  Jetimet dhe vemendja ndaj tyre
                </motion.h1>
                <p class="lead">
                  “Jetojmë në një botë që vuan nga uria, jo vetëm nga uria për
                  bukë por nga uria për dashuri”- ka thënë Nënë Tereza. Sot më
                  shumë se kurrë do të gjente zbatim kjo shprehje sidomos për
                  fëmijët jetimë. Sot më shumë se kurrë të gjithë duhet të jenë
                  solidarë me fëmijët jetimë për t’u falur atyre dashuri, këtë
                  ndjenjë që në jo pak raste e kanë të mohuar nga familjarë të
                  tyre.
                </p>
                <hr class="my-4" />
                <p>
                  Shqipëria ka aktualisht mbi 31 mijë fëmijë jetimë, të cilët
                  nga lindja deri në 15 vjeç trajtohen mirë nga shteti, por pas
                  kësaj moshe ata përballen me vështirësi të mëdha. Ata dalin
                  nga shkollat dhe jetimoret në rrugë të madhe midis rreziqeve
                  dhe për ta nuk parashikohet më asnjë mbrojtje sociale.
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
              <div class="jumbotron shadow-div-under">
                <h1 class="display-4 main-title-web">Shoqata e jetimeve</h1>
                <p class="lead">
                  Shoqata Kombëtare e Jetimëve të Shqipërisë u krijua dhe u
                  miratua nga Ministria e Arsimit me Vendim Nr. 17, Datë
                  25-11-1991. Qëllimi i kësaj Shoqate është mbrotja e të
                  drejtave të Jetimëve të Shqipërisë kudo që janë dhe integrimi
                  i tyre në jetë dhe punon me një program pune të qartë në
                  fushën: juridike, humanitare, ekonomike, arsimore e sportive
                  etj. Shoqata Kombëtare e Jetimëve të Shqipërisë është shoqatë
                  mbarë kombëtare mbasi e shtrin aktivitetin e saj në të gjithë
                  territorin e Shqipërisë dhe të gjithë drejtuesit e qendrës dhe
                  të rretheve janë persona të rritur vetë në institucionet
                  shtetërore të jetimëve ose janë nëna me fëmijë jetimë.
                </p>
                <hr class="my-4" />
                <p>
                  Misioni, i kësaj shoqate është mbrojtja e të drejtave të
                  femijëve jetime në Shqipëri kudo që ata ndodhen duke u
                  kujdesur për integrimin e tyre në jetën shoqërore dhe në botën
                  e punës. Kjo veprimtari përfshin mbështetje humanitare,
                  ekonomike, edukative, ligjore, etj.
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
