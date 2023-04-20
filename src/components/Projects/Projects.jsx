import React, { useState } from "react";
import "./projects.css";
import { Data } from "./data";

const Projects = () => {
  
  const [data, setData] = useState(Data);

  const filterSection = (sectionItem) => {
    const result = Data.filter((item) => {
      return item.category === sectionItem;
    });
    setData(result);
  };

  return (
    <div className="projects" id="projects">
      <h1 className="titlePrincipal mt-5 pt-2 pb-2" data-aos="fade-right">
        Proyectos <span className="sideRight lineTrough"></span>
      </h1>
      <div className="containerFilter">
        <button
          onClick={() => {
            setData(Data);
          }}
          className="filter"
        >
          <h2>Todos</h2>
        </button>
        <button
          onClick={() => {
            filterSection("Personal");
          }}
          className="filter"
        >
          <h2>Personal</h2>
        </button>
        <button
          onClick={() => {
            filterSection("Colaborador");
          }}
          className="filter"
        >
          <h2>Colaborador</h2>
        </button>
      </div>
      <div className="containerr">
        {data.map((projects) => {
          return (
            <>
              <div class="card" data-aos="flip-down" key={projects.id}>
                <img src={projects.url} alt="" />
                <div class="textBox">
                  <p class="text head">{projects.title}</p>
                  <span>{projects.description}</span>
                  <p class="text price">{projects.category}</p>
                  <section className="links">
                    <a href={projects.gitHub} target="_blank">
                      <i className="ri-github-fill"></i>
                    </a>
                    <a href={projects.deploy} target="_blank">
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
