import "./styles.css";
import React from "react";
import LogoBanner from "../pages/assets/LogoBanner.png";
import Background from "../pages/assets/banner.jpg";
import { NavHeader } from "./Header";
import About from "../components/AboutMe/About";
import { Skills } from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "./Footer";
import {
  NavLink,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

// Componente Main
export const Main = () => {
  return (
    <>
      <NavHeader />
      <main>
        <div className="container p-0" style={{maxWidth: '100%'}}>
          <Card className="containerBanner ju" inverse>
            <CardImg className="banner" alt="Imagen de fondo del banner" src={Background} />
            <CardImg
              className="bannerLogo"
              alt="Logo del banner"
              src={LogoBanner}
            />
            <CardImgOverlay className="containerText pt-5 pb-5 text-center">
              <CardTitle tag="h3" className="titleHi sizeText">
                Hola Mundo, my name is <span>Jhonattan Saavedra Gómez</span>
              </CardTitle>
              <CardText tag="h3" className="titleMuted mb-4">
                <small>I turn people's ideas into web creativity.</small>
              </CardText>
              <CardText className="description sizeText">
                I'm a growing FullStack Web Developer focused on front-end but
                with basic knowledge in Back-end. I’m passionate about
                technology and enjoy being able to build things based on
                imaginative ideas through creativity.
              </CardText>
              <NavLink className="button">See More</NavLink>
            </CardImgOverlay>
          </Card>

          <hr className="lineBlue line" />
          <hr className="lineLigthBlue line" />

          <About />
          <Skills />
          <Contact />

          <hr className="lineLigthBlue line" />
          <hr className="lineLigthBlue line" />
          <hr className="lineLigthBlueC line" />

          <Footer />
        </div>
      </main>
    </>
  );
};
