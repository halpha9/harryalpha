import React from "react";
import { ExperienceArr } from "../../utils/experience";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen w-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-scroll p-10 snap-x snap-mandatory">
        {ExperienceArr.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
}
