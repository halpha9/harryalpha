import React from "react";
import { ProjectsArray } from "../../utils/projects";
import ProjectCard from "./ProjectCard";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="absolute top-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full mb-10 gap-6 px-5 mx-auto max-w-7xl">
        {ProjectsArray.map((project, i) => (
          <ProjectCard project={project} key={`${i}-${project.name}`} />
        ))}
      </div>
    </div>
  );
}
