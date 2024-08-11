/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Title from "./Title";
import Content from "./Content";
import EmailItem from "./EmailItem";
import EndHeader from "./EndHeader";
import img1 from "../../assest/headerImg/img1.svg";
export default function Header() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 max-w-[1320px] lg:min-w-[960px] ">
        <div className="row-start-2 lg:row-auto">
          <Title />
          <Content />
          <EmailItem />
          <EndHeader />
        </div>
        <img
          alt="team work"
          loading="lazy"
          width="1024"
          height="1024"
          decoding="async"
          data-nimg="1"
          className="h-[36rem] w-full rounded-xl object-cover"
          src={img1}
          style={{ color: "transparent" }}
        />
      </div>
    </header>
  );
}
