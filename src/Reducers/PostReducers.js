import { createSlice } from "@reduxjs/toolkit";

export const PostSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});
export const actions = PostSlice.actions;
