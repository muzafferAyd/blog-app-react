import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addPost = createAsyncThunk(
  "newPost/addPost",
  async ({ postData }) => {
    console.log("postfata", postData);
    try {
      const result = await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          title: postData.title,
          body: postData.detail,
          userId: 1,
        },
      });
      console.log("ÇALIŞTI", result);
      return result;
    } catch (e) {
      console.log(e);
    }
  }
);

const createNewPost = createSlice({
  name: "newPost",
  initialState: {
    title: "",
    detail: "",
  },
  reducers: {
    setTitle: (state) => {
      state.title = state;
    },
    setDetail: (state) => {
      state.detail = state;
    },
  },
  extraReducers: {
    [addPost.pending]: (state, action) => {
      state.title = null;
      state.detail = null;
    },
    [addPost.fulfilled]: (state, action) => {
      state.title = action.title;
      state.detail = action.detail;
    },
    [addPost.rejected]: (state, action) => {
      state.title = action.error;
      state.detail = action.error;
    },
  },
});

export const { setTitle, setDetail } = createNewPost.actions;

export default createNewPost.reducer;
