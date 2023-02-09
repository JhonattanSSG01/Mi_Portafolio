import React from "react";
import "./projects.css";
import { Data } from "./data";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="titlePrincipal pt-5 pb-5">
        Projects <span className="sideRight lineTrough"></span>
      </h1>
      <div className="containerr">
        {Data.map((projects) => {
          return (
            <>
              <div class="card" key={projects.id}>
                <div class="header">
                  <div class="img-box">
                    <img
                      src={projects.url}
                      alt="Imagen de la tarjeta"
                      width={200}
                    />
                  </div>
                  <h1 class="title">{projects.title}</h1>
                </div>

                <div class="content">
                  <p>{projects.description}</p>

                  <a class="btn-link">Read More...</a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
