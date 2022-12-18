import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { ProjectSanity } from "../../types/sanity";
type Props = { projects: ProjectSanity[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects &&
          projects.map((project, i) => (
            <ProjectCard project={project} key={`${i}-${project.name}`} />
          ))}
      </div>
    </motion.div>
  );
}
