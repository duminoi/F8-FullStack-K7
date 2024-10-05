"use client";
import { accordionActionsClasses } from "@mui/material";
import axios from "axios";
import { act } from "react";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  isEdit: false,
  categories: [],
};

export const getCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await fetch("http://localhost:3001/categories", {
      cache: "no-store",
    });
    const categories = await response.json();

    return categories;
  }
);
export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data) => {
    const response = await axios.post("http://localhost:3001/categories", data);
    const category = await response.data;
    return category;
  }
);
export const updateCategory = createAsyncThunk(
  "category/editCategory",
  async (id, data) => {
    const response = await axios.put(
      `http://localhost:3001/categories/${id}`,
      data
    );
    const category = await response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("action", action);
        state.categories = action.payload;
      }),
      builder.addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action", action);
        state.categories.push(action.payload);
      });
  },
});
export const { setIsEdit } = categorySlice.actions;
export default categorySlice.reducer;
