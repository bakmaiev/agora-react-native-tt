import { createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./operations";

const imagesSlice = createSlice({
  name: "images",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export const imagesReducer = imagesSlice.reducer;
