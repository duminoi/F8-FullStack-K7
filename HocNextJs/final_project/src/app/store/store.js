import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/app/store/slice/categorySlice";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
