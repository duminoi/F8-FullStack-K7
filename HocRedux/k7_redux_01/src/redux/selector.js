import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const getVariable = (variable) => {
  if (variable === "subjects") {
    return useSelector((state) => {
      if (state.search.name) {
        return state.subjects.filter((subject) => {
          return subject.name.includes(state.search.name);
        });
      }
      return state.subjects;
    });
  }
  return useSelector((state) => state[variable]);
};

const subjects = createSelector(
  [(state) => state.subjects, (state) => state.search],
  ({ subjects }, search) => {
    // console.log(search.name, search.priority, search.name || search.priority);
    if (search.name) {
      return subjects.filter((subject) => {
        return subject.name.includes(search.name);
      });
    }
    if (search.priority) {
      return subjects.filter((subject) => {
        return subject.priority === search.priority;
      });
    }
    return subjects;
  }
);

export { getVariable, subjects };
