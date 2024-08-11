// import React from 'react'

import ProjectItem from "./ProjectItem";
import { projectData } from "../../data/projectSection/projectData";
export default function ProjectList() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center max-w-[1320px] lg:min-w-[960px]">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-bold leading-[1.3] text-blue-gray-900 mb-4">
          My Projects
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I'm here to turn your digital dreams
          into reality.
        </p>
      </div>
      <div className="container max-w-[1320px] lg:min-w-[960px] mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {projectData.map((item, id) => (
          <ProjectItem key={id} {...item}></ProjectItem>
        ))}
      </div>
    </section>
  );
}
