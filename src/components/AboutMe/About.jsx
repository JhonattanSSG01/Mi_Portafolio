import React from "react";
import "./about.css";
import AboutMe from "../../assets/aboutMe.png";

const About = () => {
  return (
    <>
      <div className="aboutMe">
        <h1 className="titlePrincipal">
          About Me <span className="sideRight lineTrough"></span>
        </h1>
        <img
          className="mt-3 mb-3"
          src={AboutMe}
          alt="Imagen alusiva a mi"
          width={"100%"}
          style={{ opacity: "50%" }}
        />
        <p className="aboutDesc p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </div>
    </>
  );
};

export default About;