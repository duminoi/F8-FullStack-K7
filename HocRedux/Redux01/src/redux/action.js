export const ADD_SUBJECT = "subject/addSubject";

export const SEARCH_BY_NAME = "subject/searchByName";

export const addNewSubject = (payload) => {
  return {
    type: ADD_SUBJECT,
    payload,
  };
};

export const onUpdateSearchInput = (payload) => {
  return {
    type: SEARCH_BY_NAME,
    payload,
  };
};
