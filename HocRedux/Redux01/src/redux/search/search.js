import { createSlice } from "@reduxjs/toolkit";
import { SEARCH_BY_NAME, SEARCH_BY_PRIORITY } from "../action";
const initState = {
  name: null,
  priority: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        name: action.payload,
        priority: action.payload,
      };

    case SEARCH_BY_PRIORITY:
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

const search = createSlice({
  name: "search",
  initialState: initState,
  reducers: {
    searchByName: (state, action) => {
      state.name = action.payload;
    },
    searchByPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { searchByName, searchByPriority } = search.actions;

export default search.reducer;
