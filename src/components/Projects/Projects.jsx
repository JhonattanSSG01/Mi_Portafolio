import React from "react";
import "./projects.css";
import { Data } from "./data";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="titlePrincipal pt-5 pb-5" data-aos="fade-right">
        Proyectos <span className="sideRight lineTrough"></span>
      </h1>
      <div className="containerr">
        {Data.map((projects) => {
          return (
            <>
              <div class="card">
                <img src={projects.url} alt="" />
                <div class="textBox">
                  <p class="text head">{projects.title}</p>
                  <span>{projects.description}</span>
                  <p class="text price">{projects.category}</p>
                  <section className="links">
                    <a href="">
                      <i className="ri-github-fill"></i>
                    </a>
                    <a href="">
                      <i className="ri-window-fill"></i>
                    </a>
                  </section>
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
