import React from "react";
import "./about.css";
import AboutMe from "../../pages/assets/aboutMe.png";

const About = () => {
  return (
    <>
      <div className="aboutMe">
        <h1 className="titlePrincipal">
          About Me <span className="sideRight lineTrough"></span>
        </h1>
        <div className="conttt">
          <section className="contPerfil">
            <img
              className="perfil mt-3 mb-3"
              src={AboutMe}
              alt="Imagen alusiva a mi"
            />
          </section>
          <section className="descPerfil">
            <p className="aboutDesc p-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
