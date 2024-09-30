// import React from "react";
import SearchCondition from "./components/SearchCondition/SearchCondition";
import ListSubject from "./components/ListSubject/ListSubject";
import SubjectForm from "./components/SubjectForm/SubjectForm";

export default function App() {
  return (
    <div className="flex flex-col gap-5 p-[5rem] ">
      <SearchCondition />
      <ListSubject />
      <SubjectForm />
    </div>
  );
}
