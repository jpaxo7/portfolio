import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import data from "../datas/data.json";
import MVG from "../assets/images/MVG.png";
import Kasa from "../assets/images/Kasa.png";
import SophieBluel from "../assets/images/Sophie-Bluel.png";
import Booki from "../assets/images/Booki.png";
import NinaCarducci from "../assets/images/Nina-Carducci.png";

const images = {
  MVG,
  Kasa,
  SophieBluel,
  Booki,
  NinaCarducci,
};

const Projects = () => {
  return (
    <div className="projects-grid">
      {data.map((project, id) => (
        <div className="project" key={id}>
          <a href={project.ghlink} target="_blank" rel="noreferrer">
            <img
              src={images[project.img]}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a href={project.ghlink} target="_blank" rel="noreferrer">
            <h2>{project.title}</h2>
          </a>
          <p>{project.description}</p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {project.labels.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          {project.websitelink && (
            <a href={project.websitelink} target="_blank" rel="noreferrer">
              <Button variant="contained">Visiter le site</Button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
