import React, { useState } from "react";
import { Project, Skills } from "../../../types";
import Overlay from "./Overlay";
import Skill from "./Skill";
import { motion } from "framer-motion";
interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({
  project: { description, image, skills, name, tutorial, id, github },
}) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      layoutId={`card-container-${id}`}
      className="bg-background-secundair overflow-hidden relative max-w-sm p-5 border-accent border border-gray-400 text-accent rounded-2xl"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && <Overlay id={id} github={github} />}
      <div
        className="relative"
        style={{
          paddingBottom: "115%",
        }}
      >
        <div
          className={
            "absolute inset-0 duration-500 flex flex-col justify-between " +
            (hover ? "blur" : "")
          }
        >
          <div className="flex items-start justify-between">
            <div className="flex">
              {skills.map((s, i) => (
                <Skill index={i} key={i} name={s} />
              ))}
            </div>
            {tutorial ? (
              <p className="text-sm bg-indigo-500 text-white rounded-full px-4 text-center py-0.5 uppercase font-bold tracking-widest">
                tutorial
              </p>
            ) : (
              <p className="text-sm bg-teal-500 text-white rounded-full px-4 text-center py-0.5 uppercase font-bold tracking-widest">
                Self
              </p>
            )}
          </div>
          <motion.h1
            layoutId={`project-title-${id}`}
            className="text-xl tracking-wider"
          >
            {name}
          </motion.h1>
          <motion.p
            layoutId={`description-text-${id}`}
            className="text-xs mt-1 line-clamp-3"
          >
            {description}
          </motion.p>
          <motion.img
            layoutId={`card-image-container-${id}`}
            src={image}
            className="aspect-video w-full object-cover rounded mt-4"
            alt="Project image"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
