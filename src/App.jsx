/* eslint-disable no-unused-vars */
import NavSection from "./components/navSection/NavSection";
import React, { Fragment } from "react";
import Header from "./components/headerSection/Header";
import "./assest/index.css";
import AppList from "./components/appSection/AppList";
import SkillSection from "./components/devSection/SkillSection";
import ProjectList from "./components/projectSection/ProjectList";
import ResumeList from "./components/resumeSection/ResumeList";
import Footer from "./components/Footer";
import ClientsList from "./components/clientsSection/ClientsList";
import PopularList from "./components/popularSection/PopularList";
import ContactList from "./components/contactSection/ContactList";
import TailwindLink from "./components/TailwindLink";

export default function App() {
  return (
    <Fragment>
      <NavSection />
      <Header />
      <AppList />
      <SkillSection />
      <ProjectList />
      <ResumeList />
      <ClientsList />
      <PopularList />
      <ContactList />
      <Footer />
      <TailwindLink />
    </Fragment>
  );
}
