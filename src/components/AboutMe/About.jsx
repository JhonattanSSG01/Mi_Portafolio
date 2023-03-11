import React from "react";
import "./about.css";
import AboutMe from "../../pages/assets/about.png";

const About = () => {
  return (
    <>
      <div className="aboutMe">
        <h1 className="titlePrincipal" data-aos="fade-right">
          Sobre Mí <span className="sideRight lineTrough"></span>
        </h1>
        <div className="conttt">
          <section className="contPerfil">
            <img
              className="perfil mt-3 mb-3"
              src={AboutMe}
              alt="Imagen alusiva a mi"
              data-aos="fade-up-left"
              data-aos-duration="2000"
            />
          </section>
          <section className="descPerfil">
            <p className="aboutDesc p-3">
              Me considero una persona resiliente y proactiva con excelente
              actitud frente a los desafíos, actualmente soy desarrollador web
              full stack con manejo adecuado en lenguajes de programación HTML5,
              CSS3 y JS junto con librerías como React para la construcción de
              aplicaciones web intuitivas mediante la metodología ágil - SRUM.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
