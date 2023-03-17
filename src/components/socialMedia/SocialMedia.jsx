import React from "react";
import "./socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="containerSocial">
      <div className="socialMedia">
        <a href="https://github.com/JhonattanSSG01" target="_blank">
          <i className="ri-github-line">
            <span className="lineTrough"></span>
          </i>
        </a>
        <a
          href="https://gitlab.com/jhonattanestivensaavedragomez"
          target="_blank"
        >
          <i className="ri-gitlab-fill">
            <span className="lineTrough"></span>
          </i>
        </a>
        <a href="https://www.linkedin.com/in/jhonattanssg/ " target="_blank">
          <i className="ri-linkedin-box-line">
            <span className="lineTrough"></span>
          </i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=3196788028&text=Hola%20,Mundo%20¡Estoy%20feliz%20de%20poder%20ayudarle!%20Mediante%20Whatspp"
          target="_blank"
        >
          <i className="ri-whatsapp-line">
            <span className="lineTrough"></span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
