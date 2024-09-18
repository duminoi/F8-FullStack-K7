import { createStore } from "redux";
// import { ADD_SUBJECT, SEARCH_BY_NAME, SEARCH_BY_PRIORITY } from "./action";
import searchReducer from "./search/search.js";
import subjectsReducer from "./subjects/subject.js";
// const initState = {
//   search: {
//     name: null,
//     priority: null,
//   },
//   count: 0,
//   inputValue: "",
//   option: "",
//   subjects: [
//     { id: 1, name: "database", priority: "high" },
//     { id: 2, name: "web", priority: "high" },
//     { id: 3, name: "AI", priority: "high" },
//   ],
// };

const reducer = (state = {}, action) => {
  //action = {type: string, payload: any}
  return {
    subjects: subjectsReducer(state.subjects, action),
    search: searchReducer(state.search, action),
  };
  // switch (action.type) {
  //   case "count/increment":
  //     return { ...state, count: state.count + 1 };
  //   case ADD_SUBJECT:
  //     // const newSubjects = [...].concat(state.subjects, [action.payload]);
  //     return {
  //       ...state,
  //       subjects: [
  //         ...state.subjects,
  //         {
  //           id: state.subjects.length + 1,
  //           name: action.payload.inputValue,
  //           priority: action.payload.option,
  //         },
  //       ],
  //     };
  //   case "setOption":
  //     return { ...state, option: action.payload };
  //   case "setInputValue":
  //     return { ...state, inputValue: action.payload };
  //   case SEARCH_BY_NAME:
  //     return {
  //       ...state,
  //       search: {
  //         ...state.search,
  //         name: action.payload,
  //         priority: action.payload,
  //       },
  //     };

  //   case SEARCH_BY_PRIORITY:
  //     return {
  //       ...state,
  //       search: { ...state.search, priority: action.payload },
  //     };
  //   default:
  //     return state;
  // }
};

export const store = createStore(reducer);
