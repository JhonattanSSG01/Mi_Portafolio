import "./styles.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="socialMedia">
        <h4>
          ©2023 STEIBHINN - Todos los derechos reservados <br /> Diseñado por
          Jhonattan Saavedra
        </h4>
        <div className="media">
          <a href="https://github.com/JhonattanSSG01" target="_blank">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/jhonattanssg/ " target="_blank">
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
