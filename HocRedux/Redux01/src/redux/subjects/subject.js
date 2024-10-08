//slice - split
// Đây phải là reducer của subject

import { createSlice } from "@reduxjs/toolkit";
import { ADD_SUBJECT } from "../action";
const initState = {
  subjects: [
    { id: 1, name: "database", priority: "high" },
    { id: 2, name: "web", priority: "high" },
    { id: 3, name: "AI", priority: "high" },
  ],
  inputValue: "",
  option: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "count/increment":
      return { ...state, count: state.count + 1 };
    case ADD_SUBJECT:
      // const newSubjects = [...].concat(state.subjects, [action.payload]);
      return {
        ...state,
        subjects: [
          ...state.subjects,
          {
            id: state.subjects.length + 1,
            name: action.payload.inputValue,
            priority: action.payload.option,
          },
        ],
      };
    case "setOption":
      return { ...state, option: action.payload };
    case "setInputValue":
      return { ...state, inputValue: action.payload };
    default:
      return { ...state };
  }
};

const subjectSlice = createSlice({
  name: "subjects",
  initialState: initState,
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push({
        id: state.subjects.length + 1,
        name: action.payload.inputValue,
        priority: action.payload.option,
      });
    },
    setOption: (state, action) => {
      state.option = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addSubject, setOption, setInputValue } = subjectSlice.actions;

export default subjectSlice.reducer;
