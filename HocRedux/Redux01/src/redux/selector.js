/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
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

export const subjects = createSelector(
  [(state) => state.subjects, (state) => state.search],
  ({ subjects }, search) => {
    // console.log("vào selector");
    // console.log(subjects);
    // console.log(search);

    if (search.name) {
      return subjects.filter((subject) => {
        return subject.name.includes(search.name);
      });
    }

    if (search.priority) {
      return subjects.filter((subject) => {
        return subject.priority.includes(search.priority);
      });
    }
    return subjects;
  }
);
