import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchEmail = createAsyncThunk("email/getEmail", async (query) => {
  const response = await axios.get(
    `https://api-exercise-trello.vercel.app/api/v1/api-key?email=${query}`
  );
  return response.data;
});

const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: "",
    isLoading: false,
    apiKey: "",
    inputValue: "",
  },
  reducers: {
    changeInput: (state, action) => {
      return { ...state, inputValue: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmail.pending, (state) => {
        toast("vui lòng chờ");
        state.isLoading = true;
      })
      .addCase(fetchEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.apiKey = console.log(action);
        toast("Đăng nhập thành công");
      })
      .addCase(fetchEmail.rejected, (state, action) => {
        state.isLoading = false;
        toast("Đăng nhập thất bại");
      });
  },
});

// console.log(emailSlice);

export const { changeInput } = emailSlice.actions;
export default emailSlice.reducer;
