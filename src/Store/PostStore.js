import { configureStore } from "@reduxjs/toolkit";
import { PostSlice } from "../Reducers/PostReducers";

export const PostStore = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});
