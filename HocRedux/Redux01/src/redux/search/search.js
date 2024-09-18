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

export default reducer;
