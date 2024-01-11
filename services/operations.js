import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UNSPLASH_ACCESS_KEY } from "@env";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.unsplash.com/photos`, {
        params: {
          client_id: UNSPLASH_ACCESS_KEY,
          page,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
