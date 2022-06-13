import { createSlice } from "@reduxjs/toolkit";
import { PostsData } from "../DummyData";

//createSliceを使ったら reducer を作成するだけで自動的に action type も定義してくれるし action creator も生成してくれます。
export const postSlice = createSlice({
  //name -> action type の prefix
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    //addUser -> action type
    addPost: (state, action) => {
      state.value.push(action.payload);
    },

    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
