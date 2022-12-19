import React from "react";
import { motion } from "framer-motion";
import { PageInfoSanity } from "../types/sanity";

type Props = { pageInfo: PageInfoSanity };

export default function About({ pageInfo }: Props) {
  return (
    <div className="h-screen w-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-blue-900">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.about}</p>
      </div>
    </div>
  );
}
