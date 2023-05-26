import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPosts = createAsyncThunk("posts/fetch", async () => {
  const ReadData = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(ReadData.data);
  return ReadData.data;
});
