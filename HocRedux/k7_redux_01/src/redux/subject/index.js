import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

// slice - split

const initState = {
  subjects: [],
  isLoading: false,
};
//   { id: 1, name: "database", priority: "High" },
//   { id: 2, name: "web programming", priority: "Medium" },
//   { id: 3, name: "AI", priority: "Low" },

// const initState = null;

// day phai la reducer cua subject
// const reducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'subject/add_subject':
//             return [...state, action.payload]
//         default:
//             return [...state]
//     }
// }

const subjectSlice = createSlice({
  name: "subject",
  initialState: initState,
  reducers: {
    addSubject: (state, action) => {
      // tu dong tao ra action subject/addSubject
      state.push(action.payload);
    },
    getProducts: (state, action) => {
      state.subjects = action.payload;
    },
    postProducts: (state, action) => {
      console.log(action.payload);
      state.subjects.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSubjects.pending, (state, action) => {
      console.log("pending", action);
      state.isLoading = true;
    }),
      builder.addCase(getSubjects.fulfilled, (state, action) => {
        state.subjects = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(postSubjects.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(postSubjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.subjects.push(action.payload);
      });
  },
});

const onCreateSubject = (newSubject) => {
  return function createSubjectThunk(dispatch, getState) {
    console.log("vao day");
    dispatch(
      subjectSlice.actions.addSubject({
        ...newSubject,
      })
    );
  };
};

//hàm getProducts ban đầu đáng lẽ phải là getSubjects(viết nhầm)

// export const getProducts = () => {
//   return async function getProductsApi(dispatch) {
//     console.log("dispatch", dispatch);

//     const response = await axios.get("http://localhost:3000/subjects");
//     // console.log(response.data);
//     dispatch(subjectSlice.actions.getProducts(response.data));
//   };
// };

export const getSubjects = createAsyncThunk(
  "subject/fetchSubject",
  async () => {
    const response = await axios.get("http://localhost:3000/subjects");
    return response.data;
  }
);

export const postProducts = (data) => {
  return async function postProductsApi(dispatch) {
    const response = await axios.post("http://localhost:3000/subjects", data);
    dispatch(subjectSlice.actions.postProducts(response.data));
  };
};

export const postSubjects = createAsyncThunk(
  "subject/addSubject",
  async (data) => {
    const response = await axios.post("http://localhost:3000/subjects", data);
    return response.data;
  }
);

export { onCreateSubject };
export default subjectSlice;
