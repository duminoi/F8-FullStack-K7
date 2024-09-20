import { useSelector } from "react-redux";

export const getVariable = (variables) => {
  if (variables === "subjects") {
    return useSelector((state) => {
      if (state.search.name) {
        return state.subjects.filter((subject) => {
          return (
            subject.name.includes(state.search.name) ||
            subject.name.includes(state.search.priority)
          );
        });
      }
      return state.subjects;
    });
  }
  return useSelector((state) => state[variables]);
};
