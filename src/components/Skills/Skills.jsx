import React from "react";
import "../Skills/skills.css";
import "../../pages/styles.css";
import html from "../../pages/assets/html.png";
import css from "../../pages/assets/css-3.png";
import js from "../../pages/assets/js.png";
import git from "../../pages/assets/git.png";
import gitHub from "../../pages/assets/github.png";
import gitLab from "../../pages/assets/gitlab.png";
import trello from "../../pages/assets/trello.png";
import figma from "../../pages/assets/figma.png";
import bootstrap from "../../pages/assets/bootstrap.png";
import react from "../../pages/assets/react.png";
import sql from "../../pages/assets/mysql.png";
import scrum from "../../pages/assets/scrum.png";

export function Skills() {
  return (
    <>
      <div className="skills">
        <h1 className="titlePrincipal pt-3 pb-3" data-aos="fade-right">
          Habilidades <span className="sideLeft lineTrough"></span>
        </h1>
        <section className="containerSkills">
          <section className="level1">
            <img className="html" src={html} alt="Imagen del logo html" />
            <img className="css" src={css} alt="Imagen del logo css" />
            <img className="git" src={git} alt="Imagen del logo git" />
            <img className="gitHub" src={gitHub} alt="Imagen del logo gitHub" />
            <img className="trello" src={trello} alt="Imagen del logo trello" />
            <img className="bootstrap" src={bootstrap} alt="Imagen del logo bootstrap" />
          </section>
          <section className="level2">
            <img className="js" src={js} alt="Imagen del logo js" />
            <img className="react" src={react} alt="Imagen del logo react" />
            <img className="gitLab" src={gitLab} alt="Imagen del logo gitLab" />
            <img className="sql" src={sql} alt="Imagen del logo sql" />
            <img className="figma" src={figma} alt="Imagen del logo figma" />
            <img className="scrum" src={scrum} alt="Imagen del logo scrum" />
          </section>
        </section>
      </div>
    </>
  );
}
