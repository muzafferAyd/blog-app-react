import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: true,
};

let assumedUserId = 1

export const getPostList = createAsyncThunk("posts/getPostList", async () => {

  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const  result  = await axios.get(url);
    const filteredData = result.data.filter(
        (user) => user?.userId === assumedUserId
    );
    return filteredData;
  } catch (e) {
    console.log(e);
  }
});


const postListSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /*    clearPostList: (state) => {
      state.posts = [];
    },*/
  },
  extraReducers: {
    [getPostList.pending]: (state, action) => {
      state.loading = true;
    },
    [getPostList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPostList.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { clearPostList } = postListSlice.actions;
export default postListSlice.reducer;
