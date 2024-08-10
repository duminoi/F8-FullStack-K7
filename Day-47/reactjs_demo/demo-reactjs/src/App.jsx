/* eslint-disable no-unused-vars */
import NavSection from "./components/navSection/NavSection";
import React, { Fragment } from "react";
import Header from "./components/headerSection/Header";
import "./assest/index.css";
import AppList from "./components/appSection/AppList";
import SkillSection from "./components/devSection/SkillSection";
import ProjectList from "./components/projectSection/ProjectList";
import ResumList from "./components/resumeSection/ResumList";
import Footer from "./components/Footer";
import ClientsList from "./components/clientsSection/ClientsList";

export default function App() {
  return (
    <Fragment>
      <NavSection />
      <Header />
      <AppList />
      <SkillSection />
      <ProjectList />
      <ResumList />
      <ClientsList />
    </Fragment>
  );
}
