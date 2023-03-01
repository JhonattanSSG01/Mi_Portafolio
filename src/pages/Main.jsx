// import "./styles.css";
import React from "react";
import LogoBanner from "../pages/assets/LogoBanner.png";
import Background from "../pages/assets/banner.jpg";
import Header from "./Header";
import Me from "./assets/me.png"
import About from "../components/AboutMe/About";
import { Skills } from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "./Footer";
import back from "./assets/backgr.jpg";
import {
  NavLink,
  Card,
  CardBody,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

// Componente Main
export const Main = () => {
  return (
    <>
      {/* <div className="bac">
      <img src={back} alt="" /> */}
      <main>
        <div className="co">
          <Header />
          <div className="hero">
            <h1 className="texto">full stack</h1>
          </div>
          <div className="svg">
            <div className="container p-0">
              <Card className="containerBanner ju">
                  <img alt="Sample" src={Me} />
                <CardBody className="containerText text-center">
                  <CardTitle tag="h5" className="titleHi sizeText pt-3 pb-3">
                    Hola Mundo, mi nombre es <span className="text-muted">Jhonattan Saavedra Gómez</span>
                  </CardTitle>
                  <CardSubtitle className="titleMuted mb-4" tag="h6">
                    <small>
                      Convierto las ideas de las personas en creatividad web.
                    </small>
                  </CardSubtitle>
                  <CardText className="description sizeText">
                    Soy un desarrollador web FullStack en crecimiento centrado
                    en el front-end pero con conocimientos básicos en Back-end.
                    me apasiona tecnología y disfrutar de poder construir cosas
                    basadas en ideas imaginativas a través de la creatividad.
                  </CardText>
                  <Button className="cv">
                    <NavLink
                      className=""
                      href="https://drive.google.com/file/d/1Yl1EB1KTZuDvQdxf6HzBjkfduWI7-z9E/view?usp=sharing"
                      target="_blank"
                    >
                      See More
                    </NavLink>
                  </Button>
                </CardBody>
              </Card>

              {/* <hr className="lineBlue line" />
          <hr className="lineLigthBlue line" /> */}
              {/* 
          <About />
          <Skills />
          <Contact /> */}

              {/* <hr className="lineLigthBlue line" />
          <hr className="lineLigthBlue line" />
          <hr className="lineLigthBlueC line" /> */}

              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </main>
      {/* </div> */}
    </>
  );
};
