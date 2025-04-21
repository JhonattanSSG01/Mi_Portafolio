// import "./styles.css";
import React from "react";
import Header from "./Header";
import Me from "./assets/me.png";
import About from "../components/AboutMe/About";
import Projects from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "./Footer";
import {
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
import SocialMedia from "../components/socialMedia/SocialMedia";

// Componente Main
export const Main = () => {
  return (
    <>
      <Header />
      <SocialMedia />
      <div className="co">
        <div className="hero">
          <h1 className="texto">full stack</h1>
        </div>
        <div className="svg">
          <div className="container p-0">
            <Card className="containerBanner">
              <img
                className="animate__animated animate__zoomInRight"
                alt="Sample"
                src={Me}
              />
              <CardBody className="containerText text-center">
                <CardTitle tag="h5" className="titleHi sizeText pt-3 pb-3">
                  Hola Mundo, mi nombre es
                  <span className="text-muted animate__animated animate__flash">
                    <em> Jhonattan Stiven Saavedra Gómez </em>
                  </span>
                </CardTitle>
                <CardSubtitle className="titleMuted mb-4" tag="h6">
                  <small>
                    <b>** Convierto ideas en creatividad web **</b>
                  </small>
                </CardSubtitle>
                <CardText className="description sizeText">
                  Soy un desarrollador web en constante evolución, especializado
                  en Front-end. Me apasiona
                  el desarrollo de interfaces interactivas, accesibles y
                  optimizadas, aplicando principios de diseño, usabilidad y
                  rendimiento. Disfruto convertir ideas conceptuales en
                  soluciones funcionales, utilizando tecnologías modernas y
                  buenas prácticas de desarrollo.
                </CardText>
                <Button className="cv">
                  <NavLink
                    className="link animate__animated animate__wobble"
                    href="https://drive.google.com/file/d/1nAPuOyOBKk33h7yEbEXTMdz16knVQRBw/view?usp=sharing"
                    target="_blank"
                  >
                    Ver CV
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <main>
        <div className="containerMain">
          <hr className="lineBlue line" />
          <hr className="lineLigthBlue line" />

          <About />
          <Skills />
          <Projects />
          <Contact />

          <hr className="lineLigthBlueC line" />

          <Footer />
        </div>
      </main>
    </>
  );
};
