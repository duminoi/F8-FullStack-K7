// import React from "react";
import PopularContent from "./PopularContent";
import { appData } from "../../data/appSection/appData";
import PopularItem from "./PopularItem";
export default function PopularList() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <PopularContent />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {appData.map((item, id) => (
            <PopularItem key={id} {...item}></PopularItem>
          ))}
        </div>
      </div>
    </section>
  );
}
