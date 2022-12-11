import React from "react";
import { ProjectsArray } from "../utils/projects";
import Card from "./projects/card";

function Projects() {
  return (
    <div className="bg-gray-100">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Work
      </h2>
      <div className="flex flex-wrap items-start">
        {ProjectsArray.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
