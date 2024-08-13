/* eslint-disable react/no-unescaped-entities */
// import React from "react";

import DevList from "./devList";
import { devData } from "../../data/devSection/devData";
export default function SkillSection() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center max-w-[1320px] lg:min-w-[960px]">
        <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 mb-2 font-bold uppercase">
          my skills
        </p>
        <h1 className="block antialiased tracking-normal font-sans text-5xl font-bold leading-tight text-blue-gray-900 mb-4">
          What I do
        </h1>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12">
          I'm not just a developer; I'm a digital dreamweaver. Crafting
          immersive online experiences is not just a job but my calling.
          Discover below how I can help you.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 max-w-[1320px] lg:min-w-[960px]">
        {devData.map((item, id) => (
          <DevList key={id} {...item}></DevList>
        ))}
      </div>
    </section>
  );
}
