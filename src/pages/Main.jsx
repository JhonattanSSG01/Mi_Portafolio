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
                <CardBody className="containerText pt-5 pb-5 text-center">
                  <CardTitle tag="h5" className="titleHi sizeText">
                    Hola Mundo, my name is <span>Jhonattan Saavedra Gómez</span>
                  </CardTitle>
                  <CardSubtitle className="titleMuted mb-4" tag="h6">
                    <small>I turn people's ideas into web creativity.</small>
                  </CardSubtitle>
                  <CardText className="description sizeText">
                    I'm a growing FullStack Web Developer focused on front-end
                    but with basic knowledge in Back-end. I’m passionate about
                    technology and enjoy being able to build things based on
                    imaginative ideas through creativity.
                  </CardText>
                <Button>
                  <NavLink
                    
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
