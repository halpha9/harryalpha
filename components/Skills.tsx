import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
    </div>
  );
}
