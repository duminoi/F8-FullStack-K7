// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import emailSlice from "./emailSlice.js";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    email: emailSlice,
  },
});

export default store;
