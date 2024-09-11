import { useSelector } from "react-redux";

export const getVariable = (variables) => {
  if (variables === "subjects") {
    return useSelector((state) => {
      if (state.search.name || state.search.priority) {
        console.log("state.search.name", state.search.name);
        return state.subjects.filter((subject) => {
          return (
            subject.name.includes(state.search.name) ||
            subject.priority.includes(state.search.priority)
          );
        });
      }
      return state.subjects;
    });
  }
  return useSelector((state) => state[variables]);
};
