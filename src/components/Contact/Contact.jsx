import "../../pages/styles.css";
import "./contact.css";
import React from "react";
import ContactImg from "../../pages/assets/contact.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="titlePrincipal pt-3 pb-3" data-aos="fade-right">
          Contacto <span className="sideLeft lineTrough"></span>
        </h1>
        <div className="containerContact">
          <img
            className="mt-3 mb-3"
            src={ContactImg}
            alt="Imagen alusiva para contacto"
          />
          <section>
            <h1 className="titleTouch pt-5 pb-5">GET IN TOUCH</h1>
            <p className="contactDesc p-3 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </section>
          <div className="buttonContact">Contact Me</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
