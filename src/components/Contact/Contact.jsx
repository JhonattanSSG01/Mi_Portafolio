import "../../pages/styles.css";
import "./contact.css";
import React from "react";
import ContactImg from "../../assets/contact.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="titlePrincipal pt-3 pb-3">
          Contact <span className="sideLeft lineTrough"></span>
        </h1>
        <img
          className="mt-3 mb-3"
          src={ContactImg}
          alt="Imagen alusiva para contacto"
          width={"100%"}
          style={{ opacity: "50%" }}
        />
        <h1 className="titleTouch pt-5 pb-5">GET IN TOUCH</h1>
        <p className="contactDesc p-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="buttonContact">Contact Me</div>
      </div>
    </>
  );
};

export default Contact;
