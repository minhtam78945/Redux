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
    loading: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.loading = true;
    },
    updateFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avatarUrl = action.payload.avatarUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});
export const { updateFail, updateSuccess, updateStart } = userSlice.actions;
export default userSlice.reducer;
