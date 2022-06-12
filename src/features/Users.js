import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../DummyData";

//createSliceを使ったら reducer を作成するだけで自動的に action type も定義してくれるし action creator も生成してくれます。
export const userSlice = createSlice({
  //name -> action type の prefix
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    //addUser -> action type
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
