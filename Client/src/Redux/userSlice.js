import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Tam",
    age: "18",
    about: "Hello ",
    avatarUrl:
      "https://img.lovepik.com/free-png/20211204/lovepik-cartoon-avatar-png-image_401302777_wh1200.png",
    themeColor: "#ff90501",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatarUrl = action.payload.avatarUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});
export const { update } = userSlice.actions;
export default userSlice.reducer;
