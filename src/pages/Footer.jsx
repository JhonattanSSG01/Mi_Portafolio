import "./styles.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="allRights">
        <h4>
          ©2023 STEIBHINN - All rights reserved <br /> Designed by Jhonattan
          Saavedra
        </h4>
      </section>
      <section className="socialMedia">
        <i className="ri-github-line"></i>
        <i className="ri-linkedin-fill"></i>
      </section>
    </footer>
  );
};

export default Footer;
