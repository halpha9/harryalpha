import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { ExperienceSanity } from "../../types/sanity";

type Props = {
  experience: ExperienceSanity[];
};

export default function Experience({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-900/80">
        {experience &&
          experience.length > 0 &&
          experience.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}
