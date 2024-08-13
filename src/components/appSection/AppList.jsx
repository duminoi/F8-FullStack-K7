// import React from 'react'

import AppItem from "./AppItem";
import { appData } from "../../data/appSection/appData";
export default function AppList() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center max-w-[1320px] lg:min-w-[960px]">
        <h6 className="block antialiased tracking-normal font-sans text-base font-bold leading-relaxed text-blue-gray-900 mb-8">
          My awesome clients
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {appData.map((item, id) => (
            <AppItem key={id} {...item}></AppItem>
          ))}
        </div>
      </div>
    </section>
  );
}
